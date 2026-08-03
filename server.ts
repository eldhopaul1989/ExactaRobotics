import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "MARC Robotics API" });
  });

  // Membership Application Submission Endpoint
  app.post("/api/membership", (req, res) => {
    const { name, email, phone, department, year, message, interests } = req.body;
    if (!name || !email || !phone || !department || !year) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    console.log("New MARC membership application received:", {
      name,
      email,
      phone,
      department,
      year,
      message,
      interests,
      submittedAt: new Date().toISOString(),
    });

    return res.status(200).json({
      success: true,
      message: "Application submitted successfully! The MARC team will reach out to you soon.",
    });
  });

  // Vite middleware for development vs static serve for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`MARC Server running on http://localhost:${PORT}`);
  });
}

startServer();

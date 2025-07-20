import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/generate', async (req, res) => {
  const prompt = req.body.prompt.toLowerCase();
  let article = '';

  if (prompt.includes("india")) {
    article = `Breaking News: India Wins the Cricket World Cup 2023!
In a spectacular display of skill and determination, Team India triumphed over Australia in the World Cup Final. With a thrilling performance by Virat Kohli and a strong finish by Jasprit Bumrah, India clinched the title in front of a roaring home crowd in Ahmedabad.
Fans across the country erupted in celebration as the nation secured its third World Cup title.`;
  } else if (prompt.includes("ai") || prompt.includes("journalism")) {
    article = `AI Revolutionizes Journalism: The Future Is Here
Artificial Intelligence is transforming the news industry by automating article writing, personalizing news feeds, and combating fake news. Experts believe that while AI will support journalists, human creativity will remain at the core of storytelling.`;
  } else {
    article = "This is a placeholder article. Full AI response will appear here once the API is enabled.";
  }

  res.json({ article });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

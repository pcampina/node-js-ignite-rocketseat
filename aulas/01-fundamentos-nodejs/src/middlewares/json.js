export async function json(req, res) {
  const buffers = [];

  // this make hold the result until finish
  for await (const chunk of req) {
    buffers.push(chunk)
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch {
    req.body = null;
  }

  res.setHeader('Content-Type', 'application/json');
}

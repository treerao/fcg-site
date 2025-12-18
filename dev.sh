PORT=3000

# exits 0 if IN USE, exits 1 if FREE
while node -e '
  const net = require("net");
  const p = Number(process.argv[1]);
  const s = net.createServer();

  s.once("error", () => process.exit(0));          // in use (or cannot bind)
  s.once("listening", () => s.close(() => process.exit(1))); // free

  // probe the same way Next commonly binds (IPv6 any)
  s.listen(p, "::");
' "$PORT"; do
  PORT=$((PORT+1))
done

echo "Starting Next.js on port $PORT"
npx next dev -p "$PORT"

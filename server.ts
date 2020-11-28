/*
    Start with : deno run --allow-net --allow-read --unstable ./server.ts
*/

import { opine, serveStatic } from "https://deno.land/x/opine@0.25.0/mod.ts"
import { renderFile } from "https://deno.land/x/eta@v1.9.0/mod.ts"

const app = opine()

app.engine(".html", renderFile)
app.set("view engine", "html")
app.set("views", "views")

app.use(serveStatic("res/public"))

app.get("/", (req, res) => {
    res.render("index", {
        pseudo: "CESTOLIV"
    })
})

app.listen(9062)
console.log("Opine started on port 9062")

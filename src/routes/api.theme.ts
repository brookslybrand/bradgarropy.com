import {type ActionFunctionArgs, json} from "@remix-run/cloudflare"

import type {Theme} from "~/types/theme"
import {setTheme} from "~/utils/session.server"

export const action = async ({request}: ActionFunctionArgs) => {
    const formData = await request.formData()
    const theme = formData.get("theme") as Theme
    const cookie = await setTheme(theme, request)

    return json({}, {headers: {"Set-Cookie": cookie}})
}

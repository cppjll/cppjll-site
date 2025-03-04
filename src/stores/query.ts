// shameless copy from https://hounie.me/writings/how-to-use-react-query-with-astro/
// thank youuu

import { QueryClient } from "@tanstack/react-query";
import { atom } from "nanostores";

export const queryClient = atom(new QueryClient());

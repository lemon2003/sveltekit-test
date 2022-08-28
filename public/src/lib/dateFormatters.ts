import { format } from "date-fns";

export const formatLong = (date: number | Date) => format(date, "yyyy/MM/dd hh:mm:ss");

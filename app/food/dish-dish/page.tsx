import { NavBar } from "@/components/NavBar";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const suppers = [
  {
    title: "Cold Soba Noodles with Cucumber Salad",
    date: "Jun 25, 2024",
    score: 41.00,
  },
  {
    title: "Khachapuri Cheese Bread",
    date: "Jan 21, 2024",
    score: 46.00,
  },
  {
    title: "Crispy Gochujang Tofu",
    date: "Dec 10, 2023",
    score: 44.00,
  },
];

export default function DishDishPage() {
  return (
    <div className="min-h-screen flex flex-col gap-4 p-4">
      <header className="w-full">
        <NavBar />
      </header>
      <main className="flex-1 flex flex-col items-center gap-4">
        <Card className="w-full rounded-none shadow-none border-dashed border-gray-300">
          <CardHeader className="items-start p-4">
            <CardTitle className="text-lg md:text-3xl font-bold text-left">Dish Dish</CardTitle>
            <CardDescription className="text-left mt-2">
              Dish Dish is me and my best friend Anjuli’s favorite tradition. Every so often, we pick a recipe from social media, split the grocery list, and meet up at my place to cook, catch up, and laugh about everything and nothing.<br /><br />
              It’s not just about the food (though that part’s great) — it’s our way of making time for each other. We always snap pics of our creations, eat way too much, and then rate the dish like we’re judges on a cooking show.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-full rounded-none shadow-none border-dashed border-gray-300">
          <CardHeader className="items-start p-4">
            <CardTitle className="text-lg font-bold text-left">Scoring System</CardTitle>
            <CardDescription className="text-sm text-left">
              A dish's score is derived from the combined points assigned by both Anjuli and me in the following categories.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 pt-0">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="rounded-none shadow-none border-dashed border-gray-300">
                <CardHeader className="flex-row items-center gap-2 p-4 pb-0">
                  <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                    Taste <Badge variant="secondary">10 pts</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2 pb-4 px-4">
                  <CardDescription>
                    The overall flavor profile and how enjoyable the dish is. Does the food taste good? Does the dish come together?
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="rounded-none shadow-none border-dashed border-gray-300">
                <CardHeader className="flex-row items-center gap-2 p-4 pb-0">
                  <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                    Appearance <Badge variant="secondary">5 pts</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2 pb-4 px-4">
                  <CardDescription>
                    The visual appeal and arrangement of the dish. Is the food Instagram-worthy? Does the dish come together?
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="rounded-none shadow-none border-dashed border-gray-300">
                <CardHeader className="flex-row items-center gap-2 p-4 pb-0">
                  <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                    Effort <Badge variant="secondary">5 pts</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2 pb-4 px-4">
                  <CardDescription>
                    The dedication and skill required in preparing the dish. How long did the dish demand? How labor-intensive or intricate was the process?
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="rounded-none shadow-none border-dashed border-gray-300">
                <CardHeader className="flex-row items-center gap-2 p-4 pb-0">
                  <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                    Misc <Badge variant="secondary">5 pts</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2 pb-4 px-4">
                  <CardDescription>
                    The memorability and creativity of the dish. Is the food made in a creative way? Is it a unique cooking experience?
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full rounded-none shadow-none border-dashed border-gray-300">
          <CardContent className="p-0">
            {suppers.map((supper, i) => (
              <div
                key={supper.title}
                className={[
                  "flex items-start transition-colors duration-200 cursor-pointer group",
                  i !== suppers.length - 1 && "border-b border-dashed border-gray-300",
                  "hover:bg-black hover:text-white"
                ].filter(Boolean).join(" ")}
              >
                <div className="flex flex-row items-center gap-x-4 flex-1 min-w-0">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-neutral-800 flex-shrink-0 group-hover:bg-white/20 transition-colors duration-200" />
                  <div className="flex flex-col justify-center min-w-0 w-full mr-4">
                    <div className="font-semibold text-base truncate">{supper.title}</div>
                    <div className="flex flex-row items-center mt-1 w-full">
                      <div className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-200 truncate">
                        {supper.date}
                      </div>
                      <div className="flex-1" />
                      <div className="text-right font-semibold text-sm tabular-nums ml-4">{supper.score.toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
} 
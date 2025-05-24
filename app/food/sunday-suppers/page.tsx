import { NavBar } from "@/components/NavBar";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SundaySuppersPage() {
  return (
    <div className="min-h-screen flex flex-col max-w-screen-xl mx-auto p-4 gap-4">
        <NavBar />

      <main className="flex-1 flex flex-col items-center gap-4">
        <Card className="w-full rounded-none shadow-none border-dashed border-gray-300">
          <CardHeader className="items-start p-4">
            <CardTitle className="text-lg font-bold text-left">Sunday Suppers</CardTitle>
            <CardDescription className="text-sm text-left mt-2">
              Sunday Suppers is my cherished weekly tradition with my best friend Anjuli. It's our way of blending the joy of cooking with genuine connection every weekend. Throughout the week, we find and choose a recipe, split the ingredients, and cook together at my place. It's more than just a meal; it's an opportunity for deep conversations and laughter as we savor the process.<br /><br />
              We capture our culinary creations in photos, indulge in the delicious results, and then add a unique touch — scoring and ranking each dish against previous ones. This ritual combines my love for cooking and quality time, making memories and forming deeper connections.
            </CardDescription>
          </CardHeader>
        </Card>
        {/* <Card className="w-full rounded-lg shadow-none">
          <CardHeader className="items-start p-4">
            <CardTitle className="text-lg font-bold text-left">Scoring System</CardTitle>
            <CardDescription className="text-sm text-left">
              A dish's score is derived from the combined points assigned by both Anjuli and me in the following categories.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 pt-0">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="rounded-lg shadow-none">
                <CardHeader className="flex-row items-center gap-2 p-4 pb-0">
                  <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                    Taste <Badge variant="secondary">10 pts</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2 pb-4 px-4">
                  <CardDescription>
                    The overall flavor profile and how enjoyable the dish is.<br />
                    Does the food taste good? Does the dish come together?
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="rounded-lg shadow-none">
                <CardHeader className="flex-row items-center gap-2 p-4 pb-0">
                  <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                    Appearance <Badge variant="secondary">5 pts</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2 pb-4 px-4">
                  <CardDescription>
                    The visual appeal and arrangement of the dish.<br />
                    Is the food Instagram-worthy? Does the dish come together?
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="rounded-lg shadow-none">
                <CardHeader className="flex-row items-center gap-2 p-4 pb-0">
                  <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                    Effort <Badge variant="secondary">5 pts</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2 pb-4 px-4">
                  <CardDescription>
                    The dedication and skill required in preparing the dish.<br />
                    How long did the dish demand? How labor-intensive or intricate was the process?
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="rounded-lg shadow-none">
                <CardHeader className="flex-row items-center gap-2 p-4 pb-0">
                  <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                    Misc <Badge variant="secondary">5 pts</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2 pb-4 px-4">
                  <CardDescription>
                    The memorability and creativity of the dish.<br />
                    Is the food made in a creative way? Is it a unique cooking experience?
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card> */}
      </main>
    </div>
  );
} 
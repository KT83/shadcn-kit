import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pre } from "./pre";

const PreviewAndCode = ({
  code,
  preview,
  language = "tsx",
}: {
  code: React.ReactNode;
  preview: React.ReactNode;
  language?: string;
}) => {
  return (
    <Tabs defaultValue="preview" className="w-full">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <Card className="w-full px-8">{preview}</Card>
      </TabsContent>
      <TabsContent value="code">
        <Pre>
          <code className={`language-${language}`}>{code}</code>
        </Pre>
      </TabsContent>
    </Tabs>
  );
};

export { PreviewAndCode };

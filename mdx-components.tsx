import type { MDXComponents } from "mdx/types";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";
import { Steps, Step } from "@/components/steps";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Pre } from "@/components/pre";
import { RegistrySource } from "@/components/registry-source";
import { RegistryInstallation } from "@/components/registry-installation";
import { PreviewAndCode } from "@/components/preview-and-code";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    CodeBlockWrapper,
    Steps,
    Step,
    Card,
    pre: Pre,
    PreviewAndCode,
    RegistrySource,
    RegistryInstallation,
  };
}

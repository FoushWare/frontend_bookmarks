# Shadcn UI Interview Questions

## Basic Questions

### 1. What is Shadcn UI?

Shadcn UI is a collection of beautiful, accessible React components built with Radix UI and TailwindCSS. Unlike traditional component libraries, Shadcn UI provides components as code that you copy into your project, giving you full control over styling and behavior.

### 2. How is Shadcn UI different from traditional component libraries?

Traditional libraries like Material-UI or Ant Design are installed as npm packages and provide pre-styled components. Shadcn UI components are copied directly into your project, allowing you to:
- Customize every aspect of the component
- Own the code completely
- Modify styling and behavior as needed
- No dependency on external library updates

### 3. What technologies does Shadcn UI use?

- **Radix UI**: Provides accessible, unstyled React primitives
- **TailwindCSS**: Provides utility-first styling
- **TypeScript**: Full type safety
- **CSS Variables**: For theming and dark mode support

### 4. How do you install Shadcn UI?

```bash
# Initialize your project
npx create-next-app@latest my-app
cd my-app

# Initialize shadcn/ui
npx shadcn-ui@latest init

# Add components
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
```

### 5. What is the component structure in Shadcn UI?

Components are organized in `components/ui/` directory:

```
components/
├── ui/
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   └── ...
```

## Intermediate Questions

### 6. How do you customize Shadcn UI components?

Since you own the component code, you can customize directly:

```tsx
// components/ui/button.tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        custom: "bg-gradient-to-r from-purple-500 to-pink-500",
      }
    }
  }
)
```

### 7. What is Radix UI and why does Shadcn UI use it?

Radix UI provides accessible, unstyled React components that handle complex UI patterns like dialogs, dropdowns, and tooltips. Shadcn UI builds on Radix UI primitives and adds TailwindCSS styling.

### 8. How does Shadcn UI handle accessibility?

- **Keyboard navigation**: All components support keyboard navigation
- **ARIA attributes**: Proper ARIA labels and roles
- **Focus management**: Logical focus flow
- **Screen reader support**: Compatible with screen readers
- **High contrast**: Meets WCAG AA standards

### 9. How do you implement dark mode with Shadcn UI?

```tsx
import { useTheme } from "@/components/theme-provider"

function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </Button>
  )
}
```

### 10. What are CSS variants in Shadcn UI?

Variants are different styling options for components, implemented using the `cva` (class variance authority) library:

```tsx
const buttonVariants = cva(
  "base classes",
  {
    variants: {
      variant: {
        default: "default styles",
        outline: "outline styles",
      },
      size: {
        default: "default size",
        sm: "small size",
      }
    }
  }
)
```

## Advanced Questions

### 11. How does Shadcn UI handle form validation?

Shadcn UI integrates with react-hook-form and Zod for form validation:

```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const formSchema = z.object({
  username: z.string().min(2),
})

function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  })

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  )
}
```

### 12. How do you create custom components in Shadcn UI style?

```tsx
import * as React from "react"
import { cn } from "@/lib/utils"

interface CustomCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated"
}

const CustomCard = React.forwardRef<HTMLDivElement, CustomCardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg p-6",
          {
            "bg-white shadow-md": variant === "default",
            "bg-white shadow-xl": variant === "elevated",
          },
          className
        )}
        {...props}
      />
    )
  }
)
```

### 13. How does Shadcn UI handle theming?

Theming is handled through CSS variables:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
}

.dark {
  --primary: 210 40% 98%;
  --secondary: 217.2 32.6% 17.5%;
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
}
```

### 14. How do you use Shadcn UI with different frameworks?

Shadcn UI works with:
- **Next.js App Router**: Native support
- **Next.js Pages Router**: Requires configuration
- **Vite + React**: Requires configuration
- **Remix**: Requires configuration

Each framework needs specific setup for the component system and TailwindCSS integration.

### 15. What is the `cn` utility function in Shadcn UI?

The `cn` function combines `clsx` and `tailwind-merge` to handle class names:

```tsx
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Usage
<div className={cn("base-class", conditionalClass, "another-class")} />
```

## Practical Questions

### 16. How would you create a complete form with Shadcn UI?

```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

function RegistrationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Add more fields */}
        <Button type="submit">Register</Button>
      </form>
    </Form>
  )
}
```

### 17. How do you implement a data table with Shadcn UI?

```tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function DataTable({ data }: { data: User[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
```

### 18. How do you create a modal dialog with Shadcn UI?

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function ConfirmDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
```

### 19. How do you implement tabs with Shadcn UI?

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function TabbedContent() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        {/* Account content */}
      </TabsContent>
      <TabsContent value="password">
        {/* Password content */}
      </TabsContent>
      <TabsContent value="settings">
        {/* Settings content */}
      </TabsContent>
    </Tabs>
  )
}
```

### 20. How do you handle toast notifications with Shadcn UI?

```tsx
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"

function ToastDemo() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Success",
          description: "Your changes have been saved.",
          variant: "default",
        })
      }}
    >
      Show Toast
    </Button>
  )
}
```

## Troubleshooting Questions

### 21. Why are my Shadcn UI components not styled?

Common issues:
- TailwindCSS not properly configured
- CSS variables not defined
- Component not imported correctly
- Missing `@tailwind` directives
- Content paths not configured

### 22. How do you debug Shadcn UI styling issues?

- Check browser DevTools for applied styles
- Verify TailwindCSS configuration
- Ensure CSS variables are defined
- Check component imports
- Verify `cn` function is working
- Check for conflicting styles

### 23. Why is dark mode not working?

- Check `darkMode: "class"` in Tailwind config
- Ensure CSS variables are defined for dark mode
- Verify theme provider is wrapping your app
- Check that dark class is applied to HTML element
- Ensure CSS variables use HSL format correctly

### 24. How do you handle TypeScript errors with Shadcn UI?

- Ensure proper type imports
- Check for missing type definitions
- Verify component props are correctly typed
- Use `@ts-ignore` sparingly for known issues
- Update TypeScript if needed

### 25. Why are my components not responsive?

- Check Tailwind responsive prefixes
- Ensure container queries are configured
- Verify breakpoint values
- Check for fixed widths in components
- Ensure proper mobile-first approach

## Performance Questions

### 26. How does Shadcn UI affect bundle size?

**Pros:**
- Tree shaking removes unused components
- No runtime JavaScript overhead
- Components are compiled to optimized code
- TailwindCSS purges unused styles

**Cons:**
- Each component adds to bundle size
- Radix UI primitives have some overhead
- Multiple components can increase bundle size

### 27. How do you optimize Shadcn UI for production?

- Use dynamic imports for heavy components
- Implement code splitting
- Configure TailwindCSS purging
- Use tree shaking
- Lazy load components when possible
- Minimize component dependencies

### 28. What are the best practices for Shadcn UI performance?

- Import only components you use
- Use dynamic imports for modals and dialogs
- Implement proper code splitting
- Configure TailwindCSS content paths accurately
- Use React.memo for expensive components
- Optimize re-renders with proper keys

### 29. How do you handle large-scale projects with Shadcn UI?

- Create a component library system
- Implement consistent design tokens
- Use composition patterns
- Create custom components for common patterns
- Document component usage
- Implement component testing

### 30. What tools help with Shadcn UI development?

- **VS Code**: IntelliSense and auto-completion
- **TailwindCSS IntelliSense**: Class name suggestions
- **Prettier**: Code formatting
- **ESLint**: Code linting
- **Storybook**: Component documentation
- **React DevTools**: Component debugging

## Integration Questions

### 31. How do you integrate Shadcn UI with Next.js App Router?

```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint
cd my-app
npx shadcn-ui@latest init
```

```tsx
// app/page.tsx
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Button>Click me</Button>
    </div>
  )
}
```

### 32. How do you use Shadcn UI with TypeScript?

Shadcn UI is built with TypeScript and provides full type safety:

```tsx
import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"

function CustomButton(props: ButtonProps) {
  return <Button {...props} />
}
```

### 33. How do you integrate Shadcn UI with Vite?

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npx shadcn-ui@latest init
```

### 34. How do you use Shadcn UI with Remix?

```bash
npx create-remix@latest my-app
cd my-app
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npx shadcn-ui@latest init
```

### 35. How do you integrate Shadcn UI with existing projects?

```bash
# Install dependencies
npm install tailwindcss postcss autoprefixer clsx tailwind-merge class-variance-authority

# Initialize Tailwind
npx tailwindcss init -p

# Initialize Shadcn UI
npx shadcn-ui@latest init

# Add components
npx shadcn-ui@latest add button
```

## Design System Questions

### 36. How do you create a design system with Shadcn UI?

```css
/* globals.css */
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
  --accent: 210 40% 96.1%;
  --radius: 0.5rem;
}
```

```tsx
// Create custom components based on design tokens
const DesignButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={cn(
          "rounded-full font-semibold transition-all",
          "bg-primary text-primary-foreground",
          "hover:opacity-90",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
```

### 37. How do you handle color accessibility in Shadcn UI?

Shadcn UI uses HSL color values for better accessibility:

```css
:root {
  --primary: 222.2 47.4% 11.2%; /* Dark blue */
  --primary-foreground: 210 40% 98%; /* Light text */
}
```

Use tools like:
- WebAIM Contrast Checker
- Chrome DevTools Accessibility Inspector
- axe DevTools

### 38. How do you create consistent spacing with Shadcn UI?

```css
:root {
  --spacing-xs: 0.5rem;
  --spacing-sm: 0.75rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
}
```

```tsx
<div className="p-spacing-md">Content</div>
```

### 39. How do you handle typography scale in Shadcn UI?

```css
:root {
  --font-sans: system-ui, sans-serif;
  --font-mono: monospace;
}
```

```tsx
import { cn } from "@/lib/utils"

const Typography = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-semibold",
  h3: "text-2xl font-medium",
  body: "text-base",
}
```

### 40. How do you create animation utilities with Shadcn UI?

```css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.animate-slide-in {
  animation: slideIn 0.3s ease-out;
}
```

```tsx
<div className="animate-slide-in">Animated content</div>
```

## Edge Cases

### 23. How do you handle third-party component integration?

```tsx
// Wrap third-party components with Shadcn styling
import ThirdPartyComponent from "third-party-lib"

function StyledThirdParty() {
  return (
    <div className="rounded-lg border p-4">
      <ThirdPartyComponent className="text-primary" />
    </div>
  )
}
```

### 42. How do you handle server-side rendering with Shadcn UI?

Shadcn UI components work with SSR out of the box in Next.js:

```tsx
// app/page.tsx
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button>SSR Button</Button>
    </div>
  )
}
```

### 43. How do you handle mobile-specific components?

```tsx
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        {/* Mobile menu content */}
      </SheetContent>
    </Sheet>
  )
}
```

### 44. How do you handle internationalization with Shadcn UI?

```tsx
import { useTranslation } from "react-i18n"

function LocalizedButton() {
  const { t } = useTranslation()

  return (
    <Button>{t('common.submit')}</Button>
  )
}
```

### 45. How do you migrate existing components to Shadcn UI?

- Start with new components using Shadcn UI
- Gradually refactor existing components
- Use Shadcn UI as base, add custom styling
- Maintain hybrid approach during transition
- Test accessibility during migration

## Modern Features

### 46. How do you use Shadcn UI with React Server Components?

```tsx
// app/components/server-button.tsx
import { Button } from "@/components/ui/button"

export function ServerButton() {
  return <Button>Server Component Button</Button>
}
```

### 47. How do you implement compound components with Shadcn UI?

```tsx
import { CompoundComponent } from "@/components/ui/compound"

function MyCompound() {
  return (
    <CompoundComponent>
      <CompoundComponent.Trigger>Trigger</CompoundComponent.Trigger>
      <CompoundComponent.Content>Content</CompoundComponent.Content>
    </CompoundComponent>
  )
}
```

### 48. How do you use Shadcn UI with React Query?

```tsx
import { useQuery } from "@tanstack/react-query"
import { Card } from "@/components/ui/card"

function UserData() {
  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <Card>
      <CardHeader>
        <CardTitle>{data.name}</CardTitle>
      </CardHeader>
    </Card>
  )
}
```

### 49. How do you create accessible forms with Shadcn UI?

```tsx
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

function AccessibleForm() {
  return (
    <Form>
      <FormField
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="description">Description</FormLabel>
            <FormControl>
              <Input id="description" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  )
}
```

### 50. How do you handle keyboard shortcuts with Shadcn UI?

```tsx
import { useEffect } from "react"
import { Dialog } from "@/components/ui/dialog"

function KeyboardShortcutDialog() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        // Open dialog
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return <Dialog>...</Dialog>
}
```

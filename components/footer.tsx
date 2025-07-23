import { Container } from "@/components/ui/container"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t py-8 md:py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="flex items-center space-x-2">
            <div className="rounded-full bg-primary/10 p-2">
              <span className="text-primary text-xl font-bold">MD</span>
            </div>
            <div className="font-semibold">Media Downloader</div>
          </div>
          
          <div className="text-center md:text-left text-sm text-muted-foreground">
            <p>© {currentYear} Media Downloader. All rights reserved.</p>
            <p className="mt-1">This service is for personal use only. Please respect copyright laws.</p>
          </div>
          
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
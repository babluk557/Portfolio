export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card py-8 px-4 border-t border-primary/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">
              <span className="text-primary">Bablu</span> Kumar
            </h2>
            <p className="text-muted-foreground">Full Stack Engineer</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground">© {currentYear} All Rights Reserved</p>
            <p className="text-muted-foreground text-sm mt-1">Built with Next.js and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

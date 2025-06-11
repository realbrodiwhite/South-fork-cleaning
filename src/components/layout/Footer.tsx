export default function Footer() {
  return (
    <footer className="border-t py-6 md:px-8 md:py-0 bg-background">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-20 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} South Fork Cleaning &amp; Supply. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

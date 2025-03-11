export function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto">
        {/* Footer Bottom */}
        <div className="pt-4 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} #KaburAjaDulu.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
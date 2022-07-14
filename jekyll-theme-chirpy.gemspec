# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-chirpy"
<<<<<<< HEAD
  spec.version       = "3.3.2"
=======
  spec.version       = "5.2.1"
>>>>>>> ad137fa2945b1870b9c1dd5e9212a5f4af7c3580
  spec.authors       = ["Cotes Chung"]
  spec.email         = ["cotes.chung@gmail.com"]

  spec.summary       = "Chirpy is a minimal, sidebar, responsive web design Jekyll theme that focuses on text presentation."
  spec.homepage      = "https://github.com/cotes2020/jekyll-theme-chirpy"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f|
<<<<<<< HEAD
    f.match(%r!^((assets\/(css|img|js\/[a-z])|_(includes|layouts|sass|config|data|tabs|plugins))|README|LICENSE|index)!i)
=======
    f.match(%r!^((_(includes|layouts|sass|data|tabs|plugins)|assets)\/|_config|README|LICENSE|index)!i)
>>>>>>> ad137fa2945b1870b9c1dd5e9212a5f4af7c3580
  }

  spec.metadata = {
    "bug_tracker_uri"   => "https://github.com/cotes2020/jekyll-theme-chirpy/issues",
<<<<<<< HEAD
    "documentation_uri" => "https://github.com/cotes2020/jekyll-theme-chirpy/blob/master/README.md",
=======
    "documentation_uri" => "https://github.com/cotes2020/jekyll-theme-chirpy/#readme",
>>>>>>> ad137fa2945b1870b9c1dd5e9212a5f4af7c3580
    "homepage_uri"      => "https://cotes2020.github.io/chirpy-demo",
    "source_code_uri"   => "https://github.com/cotes2020/jekyll-theme-chirpy",
    "wiki_uri"          => "https://github.com/cotes2020/jekyll-theme-chirpy/wiki",
    "plugin_type"       => "theme"
  }

<<<<<<< HEAD
=======
  spec.required_ruby_version = ">= 2.5"

>>>>>>> ad137fa2945b1870b9c1dd5e9212a5f4af7c3580
  spec.add_runtime_dependency "jekyll", "~> 4.1"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
  spec.add_runtime_dependency "jekyll-redirect-from", "~> 0.16"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.7"
  spec.add_runtime_dependency "jekyll-archives", "~> 2.2"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"

end

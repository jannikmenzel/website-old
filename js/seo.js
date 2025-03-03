document.addEventListener("DOMContentLoaded", function () {
    const seoScript = document.createElement("script");
    seoScript.type = "application/ld+json";
    seoScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Jannik Menzel",
        "url": "https://jannikmenzel.me",
        "sameAs": [
            "https://github.com/jannikmenzel",
            "https://www.instagram.com/jnk.mnz/",
            "https://dev.to/jnk_mnz"
        ],
        "jobTitle": "Informatikstudent",
        "worksFor": {
            "@type": "EducationalOrganization",
            "name": "Technische Universität Dresden"
        }
    });

    document.head.appendChild(seoScript);
});
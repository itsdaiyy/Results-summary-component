module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Using modern `hsl`
        "primary-red": "hsl(var(--color-primary-red) / <alpha-value>)",
        "primary-yellow": "hsl(var(--color-primary-yellow) / <alpha-value>)",
        "primary-teal": "hsl(var(--color-primary-teal) / <alpha-value>)",
        "primary-blue": "hsl(var(--color-primary-blue) / <alpha-value>)",

        "gradients-slate-blue":
          "hsl(var(--color-gradients-slate-blue) / <alpha-value>)",
        "gradients-royal-blue":
          "hsl(var(--color-gradients-royal-blue) / <alpha-value>)",
        "gradients-violet-blue":
          "hsl(var(--color-gradients-violet-blue) / <alpha-value>)",
        "gradients-persian-blue": "hsla(var(--color-gradients-persian-blue))",

        "neutral-blue": "hsl(var(--color-neutral-blue) / <alpha-value>)",
        "neutral-lavender":
          "hsl(var(--color-neutral-lavender) / <alpha-value>)",
        "neutral-gray-blue":
          "hsl(var(--color-neutral-gray-blue) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

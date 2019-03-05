(() => {
  const Selectors = {
    HERO_HEADING: '.hero__heading',
    HERO_FEATURES: '.hero__features ul li',
    HERO_ADDRESS: '.hero__address-link',
  }

  const Styles = {
    HEADING_START: {
      opacity: 0,
    },
    HEADING_PROC: {
      transition: 'opacity 1s ease-in',
      opacity: 1,
    },
    FEATURES_START: {
      opacity: 0,
      transform: 'translate3d(0, 15px, 0)'
    },
    FEATURES_PROC: {
      transition: ['opacity 0.2s ease-in', 'transform 0.7s ease-out'],
      opacity: 1,
      transform: 'translate3d(0, 0, 0)'
    },
    ADDRESS_START: {
      opacity: 0,
      transform: 'translate3d(0, 15px, 0)'
    },
    ADDRESS_PROC: {
      transition: ['opacity 0.2s ease-in', 'transform 0.7s ease-out'],
      opacity: 1,
      transform: 'translate3d(0, 0, 0)'
    },
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('html').classList.remove('no-js')

    const heading = document.querySelector( Selectors.HERO_HEADING )

    Object.keys(Styles.HEADING_START).forEach(k => {
      heading.style[k] = Styles.HEADING_START[k]
    })

    const animateHeading = (cb) => {
      heading.addEventListener('transitionend', cb)

      Object.keys(Styles.HEADING_PROC).forEach(k => {
        heading.style[k] = Styles.HEADING_PROC[k]
      })

      return
    }

    const features = Array.from(
      document.querySelectorAll( Selectors.HERO_FEATURES )
    )

    Object.keys(Styles.FEATURES_START).forEach(k => {
      features.forEach(f => f.style[k] = Styles.FEATURES_START[k])
    })

    const animateFeatures = (cb) => {
      features[features.length - 1].addEventListener('transitionend', cb)

      const rec = (arr) => {
        if(!arr.length) return

        const [cur, ...rest] = arr

        cur.addEventListener('transitionend', () => rec(rest))

        Object.keys(Styles.FEATURES_PROC).forEach(k => {
          cur.style[k] = Styles.FEATURES_PROC[k]
        })

        return
      }

      rec(features)
    }

    const address = document.querySelector( Selectors.HERO_ADDRESS )

    Object.keys(Styles.ADDRESS_START).forEach(k => {
      address.style[k] = Styles.ADDRESS_START[k]
    })

    const animateAddress = () => {
      Object.keys(Styles.ADDRESS_PROC).forEach(k => {
        address.style[k] = Styles.ADDRESS_PROC[k]
      })

      return
    }

    window.addEventListener('load', function() {
      animateHeading(
        () => animateFeatures(
          animateAddress
        )
      )
    })
  })
})()

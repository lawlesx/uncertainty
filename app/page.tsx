'use client'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { FC } from 'react'
import FloatingWarning from '../components/FloatingWarning'

const hindiTextVariant: Variants = {
  hidden: {
    pathLength: 0,
    stroke: '#FF4655',
  },
  visible: {
    pathLength: 1,
    stroke: '#4cd963',
    strokeWidth: 2,
    transition: {
      duration: 5,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'mirror',
    },
  },
}

const redLineVariant: Variants = {
  hidden: {
    pathLength: 0,
  },
  visible: (i) => {
    const delay = 1 + i * 0.5
    return {
      pathLength: 1,
      transition: {
        delay,
        duration: 5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'mirror',
      },
    }
  },
}

const uncertaintyTextVariant: Variants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    stroke: '#0F0F0F',
    strokeWidth: 5,
    transition: {
      delay: 1,
      duration: 5,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'mirror',
    },
  },
}

export default function Page() {
  return (
    <div className="w-full bg-background h-screen overflow-hidden">
      <div className="w-full h-screen absolute flex items-center justify-center overflow-hidden pb-10">
        <UncertaintySvgText />
      </div>
      <div className="w-full h-screen absolute flex items-end justify-around overflow-hidden">
        <RedLine />
        <RedLine className="flipHorizontal" />
      </div>
      <div className="w-full h-screen absolute hidden md:flex items-end justify-between overflow-hidden pb-10">
        <GreenLine delay={1} className="-translate-x-3" />
        <div className="translate-x-3">
          <GreenLine className="flipHorizontal" delay={1} />
        </div>
      </div>
      <div className="w-full h-screen flex flex-col gap-8 items-center justify-center relative">
        <motion.p
          initial={{
            opacity: 0,
            scale: 0.5,
            y: -100,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            type: 'spring',
            duration: 1,
            bounce: 0.5,
          }}
          className="text-primary text-[3rem] md:leading-[10rem] md:text-[98px] font-bold"
        >
          Welcome
        </motion.p>
        <Link
          href="/uncertainty"
        >
          <motion.h1
            initial={{
              opacity: 0,
              scale: 0.5,
              backgroundColor: '#6CECFF',
              color: '#ffffff',
            }}
            animate={{
              opacity: 1,
              scale: 1,
              backgroundColor: '#6CECFF',
              color: '#ffffff',
            }}
            whileHover={{
              scale: 1.1,
              backgroundColor: '#FF4655',
              color: '#1a1a1a',
            }}
            transition={{
              opacity: { duration: 1 },
              duration: 0.5,
              ease: 'easeInOut',
            }}
            className="py-5 md:py-10 px-10 md:px-20 rounded-full text-lg md:text-5xl font-semibold text-white"
          >{`Let's Dive In`}</motion.h1>
        </Link>
        <WelcomeInHindi />
      </div>
      <FloatingWarning />
    </div>
  )
}

const WelcomeInHindi = () => {
  return (
    <motion.svg
      initial="hidden"
      animate="visible"
      viewBox="0 0 594 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-4 w-[300px] md:w-[600px] "
    >
      <motion.path
        variants={hindiTextVariant}
        d="M87.7031 28.5469V39.0938H77.0625V88.2188H75.2344L65.7188 78.4688V39.0938H54.5156V88.2188H52.3594L43.1719 78.4688V63.2812C40.6094 64.0625 37.3438 64.4531 33.375 64.4531C33.4688 65.2656 33.5156 66.0625 33.5156 66.8438C33.5156 70.9688 32.2969 74.25 29.8594 76.6875C27.4531 79.0938 24.4375 80.2969 20.8125 80.2969C15.75 80.2656 11.3438 77.9531 7.59375 73.3594C3.875 68.7656 1.65625 62.5625 0.9375 54.75H5.25C6.03125 59.2188 7.67188 62.8438 10.1719 65.625C12.6719 68.375 15.4844 69.75 18.6094 69.75C20.7031 69.75 22.5 69.125 24 67.875C25.5 66.625 26.25 65.2031 26.25 63.6094C26.25 61.2031 25.3125 59.2344 23.4375 57.7031C21.5625 56.1719 19.2031 55.4219 16.3594 55.4531C15.5469 55.4531 14.7188 55.5156 13.875 55.6406L6.79688 47.4375C12.1094 47.0625 16.3125 46.0938 19.4062 44.5312C22.5312 42.9688 24.0781 41.1562 24.0469 39.0938C24.0469 37.9062 23.5156 36.875 22.4531 36C21.3906 35.125 19.9688 34.6875 18.1875 34.6875C14.9375 34.6875 10.8125 35.9062 5.8125 38.3438L0.421875 29.9062C2.92188 29 6.67188 28.5469 11.6719 28.5469C17.5156 28.5469 22.0781 29.7188 25.3594 32.0625C28.6406 34.4062 30.2812 37.5469 30.2812 41.4844C30.2812 46.3906 27.625 49.9531 22.3125 52.1719C27.9062 54.6719 31.875 55.9219 34.2188 55.9219C37.0312 55.9219 39.2188 55.2188 40.7812 53.8125C42.375 52.375 43.1719 50.4531 43.1719 48.0469V39.0938H38.6719L31.6406 28.5469H87.7031Z"
      />
      <motion.path
        variants={hindiTextVariant}
        d="M140.672 28.5469V39.0938H129.984V88.2188H127.781L118.688 78.5625V67.125C116.156 68.5312 113.5 69.2344 110.719 69.2344C106.562 69.2344 102.297 67.5469 97.9219 64.1719C93.5469 60.7656 91.3438 57.3438 91.3125 53.9062V39.0938H86.7188V28.5469H140.672ZM118.688 55.0312V39.0938H102.656V57.3281C102.656 61.1094 104.156 63 107.156 63C107.938 63 108.891 62.7188 110.016 62.1562C111.141 61.5938 114.031 59.2188 118.688 55.0312Z"
      />
      <motion.path
        variants={hindiTextVariant}
        d="M207.141 28.5469V39.0938H178.266V48.4219C180.047 47.4531 182 46.9688 184.125 46.9688C188.75 46.9688 192.625 49.125 195.75 53.4375C198.875 57.75 200.438 62.25 200.438 66.9375C200.438 71.8438 198.969 76.7188 196.031 81.5625L187.969 73.2656C191.5 68.1406 193.266 63.7656 193.266 60.1406C193.266 56.5469 191.812 54.75 188.906 54.75C187.188 54.75 183.641 56.5469 178.266 60.1406V88.3125H176.344L166.922 78.4688V67.8281C163.016 70.2344 159.859 71.4375 157.453 71.4375C154.109 71.4375 151.078 69.7969 148.359 66.5156C145.641 63.2344 144.281 59.1875 144.281 54.375C144.281 47.4062 147.453 43.9219 153.797 43.9219C157.734 43.9219 162.109 46.0312 166.922 50.25V39.0938H139.594V28.5469H207.141ZM166.922 55.5469V54.6562C164.172 53.5 161.75 52.9219 159.656 52.9219C157.25 52.9219 155.047 53.4688 153.047 54.5625C151.047 55.6562 150.047 57.2188 150.047 59.25C150.047 60.3438 150.453 61.2812 151.266 62.0625C152.109 62.8125 153.141 63.1875 154.359 63.1875C157.328 63.1875 161.516 60.6406 166.922 55.5469Z"
      />
      <motion.path
        variants={hindiTextVariant}
        d="M237.938 28.5469V39.0938H227.25V88.2188H225.422L215.953 78.4688V39.0938H206.156V28.5469H237.938Z"
      />
      <motion.path
        variants={hindiTextVariant}
        d="M311.25 28.5469V39.0938H291.75C292.625 42.25 293.062 44.9688 293.062 47.25C293.062 49.5312 292.75 51.5781 292.125 53.3906C294.469 54.4844 296.766 55.0312 299.016 55.0312C302.922 55.0312 307 52.9844 311.25 48.8906V58.7812C307.031 61.5625 302.516 62.9531 297.703 62.9531C295.391 62.9531 292.547 62.3594 289.172 61.1719C287.234 63.9844 285.141 66.3906 282.891 68.3906C287.953 74.5469 293.047 80.1406 298.172 85.1719L294.422 88.2188C283.484 76.375 276.891 68.5 274.641 64.5938C272.422 60.6875 271.312 57.375 271.312 54.6562C271.312 50.5625 273.266 48.5156 277.172 48.5156C278.797 48.5156 280.672 49 282.797 49.9688C283.422 48.625 283.734 46.7031 283.734 44.2031C283.734 42.1094 283.422 40.4062 282.797 39.0938H267.562V28.5469H311.25Z"
      />
      <motion.path
        variants={hindiTextVariant}
        d="M367.641 28.5469V39.0938H357V88.2188H354.984L345.656 78.1875V71.6719C341.406 74.5469 337.109 75.9844 332.766 75.9844C328.828 75.9844 324.719 73.7344 320.438 69.2344C316.188 64.7031 314.062 60.3906 314.062 56.2969C314.062 52.5781 315.906 49.6719 319.594 47.5781C323.312 45.4531 327.359 44.3906 331.734 44.3906C336.453 44.3906 341.094 46.5 345.656 50.7188V39.0938H309.281V28.5469H367.641ZM345.656 57.75V55.9219C343.094 54.5156 340.594 53.8125 338.156 53.8125C335.281 53.7812 331.859 54.5938 327.891 56.25C323.922 57.9062 321.938 59.6406 321.938 61.4531C321.938 62.6094 322.453 63.75 323.484 64.875C324.547 66 325.859 66.5625 327.422 66.5625C330.016 66.5625 333.297 65.5781 337.266 63.6094C341.266 61.6406 344.062 59.6875 345.656 57.75Z"
      />
      <motion.path
        variants={hindiTextVariant}
        d="M398.344 28.5469V39.0938H387.656V88.2188H385.828L376.359 78.4688V39.0938H366.562V28.5469H398.344Z"
      />
      <motion.path
        variants={hindiTextVariant}
        d="M454.922 28.5469V39.0938H444.234V88.2188H442.5L433.031 78.2812V39.0938H417.75L419.578 56.2031C420.078 60.8594 420.328 63.7969 420.328 65.0156C420.328 70.4531 418.703 73.1719 415.453 73.1719C412.797 73.1719 409.594 70.4844 405.844 65.1094C402.125 59.7344 400.266 55.7031 400.266 53.0156C400.266 51.5469 401.328 50.8125 403.453 50.8125C403.891 50.8125 404.578 50.8594 405.516 50.9531C406.422 51.0469 407.078 51.0938 407.484 51.0938C408.953 51.0938 409.688 50.3594 409.688 48.8906V39.0938H397.312V28.5469H454.922Z"
      />
      <motion.path
        variants={hindiTextVariant}
        d="M511.125 28.5469V39.0938H500.484V88.2188H498.281L489.234 78.4688V57.75H476.297C470.078 57.75 466.969 60.6562 466.969 66.4688C466.969 71.2188 470.969 77.2969 478.969 84.7031L475.453 88.2188C464.547 78.375 459.094 69.2656 459.094 60.8906C459.125 56.8281 460.188 53.5312 462.281 51C464.406 48.4375 466.969 47.1562 469.969 47.1562H489.234V39.0938H453.844V28.5469H511.125Z"
      />
      <motion.path
        variants={hindiTextVariant}
        d="M593.531 28.5469V39.0938H583.828V56.2969H559.734C557.047 56.2969 555.703 57.25 555.703 59.1562C555.703 60.6562 556.438 62.2344 557.906 63.8906C561.375 62.1406 565.031 61.2656 568.875 61.2656C573.75 61.2656 577.953 62.7812 581.484 65.8125C585.047 68.8125 586.828 72.75 586.828 77.625C586.828 83 584.484 88.0156 579.797 92.6719L571.266 85.3594C578.109 81.8906 581.531 78.3125 581.531 74.625C581.531 73.1562 580.906 71.875 579.656 70.7812C578.438 69.6875 576.891 69.1406 575.016 69.1406C570.984 69.1406 566.828 70.6094 562.547 73.5469C558.297 76.4844 556.172 79.7812 556.172 83.4375C556.172 88.625 559.859 93.625 567.234 98.4375C574.641 103.281 582.953 107.109 592.172 109.922L591.141 114.422C580.016 111.141 569.797 106.203 560.484 99.6094C551.172 93.0469 546.516 86.3594 546.516 79.5469C546.516 74.6719 548.875 70.3125 553.594 66.4688C549.375 61.1562 547.266 56.8281 547.266 53.4844C547.266 48.7656 550.844 46.4062 558 46.4062H573.188V39.0938H540.75V28.5469H572.719C566.656 21.9844 558.781 18.7031 549.094 18.7031C547.844 18.7031 546.578 18.7656 545.297 18.8906L542.344 8.29688C547.688 8.89062 553.531 10.9219 559.875 14.3906C566.25 17.8594 571.75 22.125 576.375 27.1875C574.719 15.5 570.125 9.65625 562.594 9.65625C561.438 9.65625 560.406 9.71875 559.5 9.84375L556.875 0.796875H561.656C572.344 0.796875 578.578 10.0469 580.359 28.5469H593.531Z"
      />
    </motion.svg>
  )
}

interface SVGLineProps {
  className?: string
  delay?: number
}

const RedLine: FC<SVGLineProps> = ({ className, delay }) => {
  return (
    <motion.svg
      initial="hidden"
      animate="visible"
      width="579"
      height="982"
      viewBox="0 0 579 982"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        variants={redLineVariant}
        custom={delay}
        d="M574.5 979.5L450.5 663.5L4 569V-0.5"
        stroke="#FF4B6B"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </motion.svg>
  )
}

const GreenLine: FC<SVGLineProps> = ({ className, delay }) => {
  return (
    <motion.svg
      initial="hidden"
      animate="visible"
      className={className}
      width="519"
      height="349"
      viewBox="0 0 519 349"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={redLineVariant}
        custom={delay}
        d="M4.82842 4.99959L94.9459 4.10689L98.3137 344.09L514.666 339.966"
        stroke="#4CD964"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </motion.svg>
  )
}

const UncertaintySvgText = () => {
  return (
    <motion.svg
      initial="hidden"
      animate="visible"
      width="1128"
      height="611"
      viewBox="0 0 1128 611"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={uncertaintyTextVariant}
        d="M90.5156 448.329C93.8217 446.674 97.0649 446.482 100.245 447.752C103.362 448.895 105.748 451.12 107.402 454.426L141.964 523.474C147.247 534.029 149.636 544.521 149.132 554.95C148.755 565.316 145.77 574.761 140.177 583.285C134.584 591.809 126.575 598.681 116.147 603.9C105.72 609.119 95.3555 611.445 85.0531 610.877C74.8778 610.245 65.4645 607.006 56.8132 601.159C48.2891 595.249 41.3856 587.016 36.1027 576.462L1.54141 507.414C-0.113453 504.108 -0.337459 500.801 0.869395 497.494C2.0126 494.059 4.36445 491.451 7.92494 489.668C10.8496 488.205 14.0293 488.044 17.4638 489.187C20.9619 490.14 23.5384 492.269 25.1932 495.575L59.7545 564.623C62.937 570.981 67.0409 575.845 72.0663 579.213C77.1551 582.39 82.5614 584.137 88.285 584.452C94.1357 584.704 99.6043 583.557 104.691 581.011C110.159 578.274 114.609 574.457 118.04 569.558C121.472 564.66 123.505 559.19 124.138 553.149C124.708 546.98 123.402 540.716 120.219 534.358L85.658 465.31C84.0031 462.004 83.5884 458.793 84.4137 455.676C85.1755 452.433 87.2094 449.983 90.5156 448.329Z"
      />
      <motion.path
        variants={uncertaintyTextVariant}
        d="M197.743 431.868C207.153 427.158 215.26 425.564 222.065 427.088C228.998 428.547 235.009 432.138 240.099 437.859C245.252 443.389 249.834 450.16 253.844 458.171L278.285 507.001C279.94 510.307 280.259 513.646 279.243 517.016C278.164 520.26 275.971 522.71 272.664 524.364C269.358 526.019 266.083 526.307 262.84 525.227C259.532 524.02 257.051 521.764 255.396 518.458L230.955 469.628C228.855 465.432 226.405 461.967 223.605 459.234C220.87 456.309 217.594 454.53 213.778 453.896C209.962 453.262 205.447 454.249 200.234 456.859C195.147 459.405 191.333 462.586 188.791 466.403C186.376 470.156 185.074 474.227 184.885 478.615C184.76 482.812 185.747 487.009 187.848 491.205L212.289 540.035C213.944 543.341 214.263 546.679 213.247 550.05C212.167 553.294 209.974 555.743 206.668 557.398C203.362 559.053 200.087 559.341 196.843 558.261C193.536 557.054 191.055 554.798 189.4 551.491L149.969 472.716C148.315 469.409 148.027 466.134 149.107 462.891C150.123 459.52 152.284 457.007 155.59 455.352C158.896 453.697 162.203 453.473 165.51 454.68C168.754 455.76 171.203 457.953 172.858 461.259L176.964 469.461L173.816 470.32C173.879 467.586 174.386 464.47 175.338 460.971C176.227 457.346 177.593 453.721 179.436 450.095C181.278 446.47 183.725 443.098 186.776 439.981C189.764 436.736 193.419 434.032 197.743 431.868Z"
      />
      <motion.path
        variants={uncertaintyTextVariant}
        d="M302.212 379.577C309.46 375.949 316.136 373.561 322.241 372.414C328.472 371.203 333.751 371.264 338.076 372.598C342.464 373.74 345.613 376.219 347.523 380.034C348.796 382.577 349.242 385.375 348.862 388.428C348.418 391.353 346.734 393.548 343.809 395.012C341.774 396.03 339.93 396.635 338.277 396.827C336.687 396.827 335.161 396.637 333.698 396.256C332.235 395.876 330.613 395.654 328.833 395.591C327.179 395.464 324.922 395.879 322.061 396.834C319.263 397.598 317.228 398.299 315.956 398.935C309.471 402.181 304.64 406.349 301.462 411.438C298.412 416.463 296.888 421.996 296.891 428.037C296.83 433.952 298.359 440.024 301.477 446.255C304.533 452.359 308.478 457.222 313.312 460.845C318.21 464.277 323.521 466.31 329.245 466.943C335.096 467.513 340.883 466.366 346.605 463.501C349.784 461.91 352.422 460.351 354.52 458.824C356.618 457.297 358.239 455.77 359.383 454.243C360.654 452.335 361.703 450.458 362.529 448.614C363.355 446.769 365.166 445.147 367.964 443.746C371.27 442.091 374.354 441.899 377.216 443.17C380.015 444.313 382.178 446.411 383.706 449.463C385.297 452.642 384.981 456.458 382.757 460.91C380.469 465.236 376.815 469.689 371.793 474.27C366.834 478.66 360.985 482.542 354.246 485.915C344.2 490.943 334.344 493.014 324.677 492.128C314.947 491.115 306.042 487.621 297.963 481.647C290.011 475.609 283.553 467.63 278.589 457.712C273.369 447.285 270.885 437.079 271.135 427.095C271.448 416.92 274.243 407.729 279.517 399.523C284.856 391.126 292.42 384.478 302.212 379.577Z"
      />
      <motion.path
        variants={uncertaintyTextVariant}
        d="M456.965 434.5C446.157 439.91 435.633 442.395 425.394 441.954C415.219 441.322 406.028 438.21 397.822 432.617C389.743 426.961 383.254 419.237 378.353 409.446C372.624 398.001 370.044 387.128 370.612 376.826C371.243 366.332 374.228 357.046 379.567 348.967C384.905 340.889 391.77 334.749 400.163 330.548C406.648 327.302 413.42 325.582 420.479 325.388C427.665 325.131 434.661 326.241 441.466 328.718C448.208 331.068 454.379 334.658 459.977 339.489C465.702 344.256 470.284 350.073 473.721 356.94C475.121 360.055 475.154 363.139 473.82 366.193C472.486 369.246 470.293 371.536 467.241 373.064L394.378 409.534L379.109 393.324L449.111 358.286L446.824 364.201L444.246 359.051C442.146 355.491 439.156 352.853 435.276 351.137C431.523 349.358 427.453 348.533 423.065 348.663C418.74 348.601 414.607 349.556 410.665 351.53C406.85 353.439 403.544 355.73 400.747 358.402C397.95 361.074 395.949 364.223 394.742 367.848C393.535 371.474 393.251 375.671 393.889 380.44C394.527 385.21 396.405 390.71 399.524 396.94C402.961 403.807 407.288 408.956 412.504 412.388C417.783 415.629 423.285 417.407 429.009 417.723C434.796 417.848 440.233 416.637 445.319 414.091C450.024 411.736 453.584 409.477 456 407.314C458.415 405.15 460.195 403.146 461.339 401.302C462.547 399.266 463.659 397.517 464.676 396.054C466.392 393.764 468.267 392.109 470.301 391.091C473.099 389.691 475.865 389.499 478.6 390.515C481.462 391.468 483.53 393.216 484.803 395.759C486.521 399.192 486.301 403.199 484.14 407.779C482.234 412.231 478.834 417.034 473.94 422.187C468.982 427.213 463.323 431.317 456.965 434.5Z"
      />
      <motion.path
        variants={uncertaintyTextVariant}
        d="M531.896 394.609C528.589 396.264 525.314 396.551 522.071 395.472C518.763 394.265 516.282 392.008 514.627 388.702L475.197 309.926C473.542 306.62 473.254 303.345 474.334 300.101C475.35 296.73 477.511 294.218 480.817 292.563C484.124 290.908 487.43 290.684 490.738 291.891C493.982 292.97 496.431 295.163 498.086 298.469L507.06 316.399L499.328 304.288C499.2 300.536 499.643 296.974 500.659 293.603C501.739 290.042 503.295 286.798 505.329 283.872C507.299 280.818 509.683 278.114 512.48 275.76C515.277 273.406 518.265 271.433 521.444 269.842C525.259 267.933 528.979 267.422 532.604 268.311C536.357 269.136 538.965 271.011 540.429 273.936C542.529 278.132 542.976 281.725 541.769 284.714C540.498 287.577 538.591 289.644 536.048 290.917C533.632 292.127 531.184 292.795 528.704 292.924C526.351 292.988 523.903 293.657 521.36 294.93C519.071 296.076 517.005 297.825 515.161 300.179C513.382 302.342 512.047 305.077 511.159 308.384C510.397 311.628 510.239 315.285 510.686 319.355C511.197 323.234 512.598 327.462 514.889 332.04L537.516 377.245C539.171 380.551 539.49 383.89 538.474 387.261C537.395 390.505 535.202 392.954 531.896 394.609Z"
      />
      <motion.path
        variants={uncertaintyTextVariant}
        d="M554.176 258.229L599.382 235.602C602.433 234.074 605.486 233.819 608.539 234.835C611.592 235.851 613.882 237.885 615.41 240.937C616.873 243.862 617.097 246.85 616.081 249.903C615.001 252.829 612.935 255.056 609.884 256.583L564.678 279.211C561.626 280.738 558.574 280.994 555.521 279.978C552.468 278.961 550.178 276.927 548.65 273.876C547.186 270.951 546.994 268.026 548.074 265.1C549.09 262.047 551.124 259.757 554.176 258.229ZM562.651 224.171C565.957 222.516 569.201 222.324 572.381 223.594C575.625 224.674 578.074 226.867 579.729 230.173L622.214 315.053C623.105 316.833 624.155 318.136 625.364 318.962C626.7 319.725 628.067 320.074 629.466 320.01C630.992 319.882 632.455 319.468 633.854 318.768C635.379 318.004 636.651 317.05 637.668 315.904C638.621 314.632 639.925 313.582 641.578 312.755C643.358 311.864 645.361 311.895 647.587 312.848C649.941 313.737 651.849 315.644 653.313 318.569C655.095 322.129 654.588 326.04 651.792 330.302C649.123 334.501 645.563 337.714 641.112 339.941C638.442 341.278 635.358 342.583 631.861 343.857C628.428 344.939 624.835 345.386 621.083 345.197C617.394 344.817 613.705 343.324 610.015 340.718C606.326 338.112 602.922 333.694 599.803 327.463L556.84 241.63C555.185 238.324 554.897 235.049 555.977 231.805C557.12 228.37 559.345 225.826 562.651 224.171Z"
      />
      <motion.path
        variants={uncertaintyTextVariant}
        d="M712.714 174.104C716.02 172.449 719.295 172.162 722.539 173.241C725.782 174.321 728.263 176.578 729.982 180.011L770.367 260.694C772.022 264 772.341 267.339 771.325 270.71C770.246 273.954 768.053 276.403 764.747 278.058C761.44 279.713 758.165 280 754.922 278.92C751.614 277.714 749.133 275.457 747.478 272.151L742.8 262.805L747.856 262.421C748.683 264.074 748.811 266.554 748.24 269.861C747.606 273.041 746.335 276.539 744.429 280.356C742.523 284.172 739.886 287.957 736.517 291.711C733.211 295.273 729.143 298.264 724.311 300.683C715.536 305.075 706.475 306.827 697.126 305.941C687.714 304.928 678.937 301.529 670.794 295.746C662.715 289.771 656.098 281.634 650.942 271.334C645.723 260.907 643.175 250.733 643.298 240.812C643.484 230.701 645.961 221.669 650.727 213.718C655.429 205.64 662.04 199.468 670.56 195.204C676.028 192.467 681.464 190.779 686.87 190.141C692.275 189.503 697.267 189.628 701.846 190.516C706.552 191.341 710.464 192.643 713.581 194.422C716.761 196.01 718.797 197.695 719.688 199.475L714.063 205.392L707.093 191.468C705.438 188.162 705.151 184.887 706.23 181.643C707.246 178.272 709.407 175.759 712.714 174.104ZM716.67 278.269C722.265 275.469 726.46 271.619 729.256 266.721C732.052 261.824 733.385 256.386 733.256 250.408C733.253 244.367 731.756 238.358 728.764 232.381C725.709 226.277 721.764 221.414 716.93 217.791C712.222 214.105 707.07 211.913 701.474 211.216C695.877 210.519 690.281 211.571 684.686 214.371C679.218 217.108 675.086 220.925 672.29 225.823C669.494 230.721 668.097 236.191 668.1 242.232C668.23 248.21 669.822 254.251 672.878 260.355C675.869 266.331 679.718 271.163 684.426 274.849C689.261 278.472 694.476 280.632 700.073 281.329C705.67 282.026 711.202 281.006 716.67 278.269Z"
      />
      <motion.path
        variants={uncertaintyTextVariant}
        d="M816.704 237.501C818.358 240.807 818.678 244.146 817.662 247.516C816.582 250.76 814.389 253.21 811.083 254.864C807.777 256.519 804.502 256.807 801.258 255.727C797.951 254.52 795.47 252.264 793.815 248.958L754.384 170.182C752.729 166.876 752.442 163.601 753.522 160.357C754.538 156.986 756.699 154.473 760.005 152.818C763.311 151.163 766.618 150.939 769.925 152.146C773.169 153.226 775.618 155.419 777.273 158.725L816.704 237.501ZM753.608 140.516C749.285 142.68 745.883 143.508 743.403 143C740.922 142.492 738.791 140.458 737.009 136.898L735.195 133.274C733.349 129.586 733.062 126.629 734.333 124.403C735.667 121.986 738.369 119.759 742.438 117.722C746.888 115.494 750.354 114.634 752.834 115.142C755.315 115.65 757.446 117.684 759.228 121.244L761.042 124.868C762.888 128.556 763.207 131.576 762 133.93C760.729 136.156 757.932 138.352 753.608 140.516Z"
      />
      <motion.path
        variants={uncertaintyTextVariant}
        d="M848.57 106.103C857.98 101.393 866.087 99.7992 872.893 101.323C879.825 102.782 885.836 106.373 890.926 112.094C896.08 117.624 900.661 124.395 904.671 132.406L929.112 181.236C930.767 184.542 931.087 187.881 930.071 191.251C928.991 194.495 926.798 196.944 923.492 198.599C920.186 200.254 916.911 200.542 913.667 199.462C910.36 198.255 907.878 195.999 906.224 192.693L881.782 143.863C879.682 139.667 877.232 136.202 874.433 133.469C871.697 130.544 868.421 128.765 864.605 128.131C860.789 127.497 856.275 128.484 851.061 131.094C845.975 133.64 842.16 136.821 839.618 140.638C837.203 144.391 835.901 148.462 835.712 152.85C835.587 157.047 836.575 161.244 838.675 165.44L863.116 214.27C864.771 217.576 865.09 220.914 864.074 224.285C862.995 227.529 860.802 229.978 857.496 231.633C854.189 233.288 850.914 233.576 847.671 232.496C844.363 231.289 841.882 229.032 840.227 225.726L800.797 146.95C799.142 143.644 798.854 140.369 799.934 137.126C800.95 133.755 803.111 131.242 806.417 129.587C809.724 127.932 813.03 127.708 816.338 128.915C819.582 129.995 822.031 132.188 823.686 135.494L827.791 143.696L824.644 144.555C824.706 141.821 825.213 138.705 826.166 135.206C827.055 131.581 828.42 127.956 830.263 124.33C832.106 120.704 834.552 117.333 837.604 114.216C840.591 110.971 844.247 108.267 848.57 106.103Z"
      />
      <motion.path
        variants={uncertaintyTextVariant}
        d="M910.697 79.7762L955.902 57.149C958.954 55.6215 962.007 55.3658 965.06 56.382C968.113 57.3981 970.403 59.4322 971.93 62.484C973.394 65.4087 973.618 68.3975 972.602 71.4505C971.522 74.3762 969.456 76.6029 966.404 78.1305L921.199 100.758C918.147 102.285 915.095 102.541 912.042 101.525C908.989 100.509 906.699 98.4745 905.171 95.4227C903.707 92.498 903.515 89.5727 904.595 86.647C905.611 83.594 907.645 81.3038 910.697 79.7762ZM919.172 45.718C922.478 44.0631 925.721 43.8709 928.902 45.1414C932.145 46.2211 934.595 48.4141 936.25 51.7202L978.735 136.6C979.626 138.38 980.676 139.683 981.885 140.509C983.22 141.272 984.588 141.621 985.987 141.557C987.513 141.429 988.976 141.015 990.374 140.315C991.9 139.551 993.172 138.597 994.189 137.452C995.142 136.179 996.445 135.129 998.098 134.302C999.879 133.411 1001.88 133.442 1004.11 134.395C1006.46 135.284 1008.37 137.191 1009.83 140.116C1011.62 143.676 1011.11 147.588 1008.31 151.85C1005.64 156.048 1002.08 159.261 997.633 161.489C994.963 162.825 991.879 164.13 988.382 165.404C984.948 166.486 981.356 166.933 977.603 166.744C973.915 166.364 970.226 164.871 966.536 162.265C962.847 159.659 959.442 155.241 956.324 149.01L913.361 63.177C911.706 59.8709 911.418 56.5959 912.498 53.3521C913.641 49.9176 915.866 47.3729 919.172 45.718Z"
      />
      <motion.path
        variants={uncertaintyTextVariant}
        d="M1062.37 1.47306C1065.67 -0.181814 1068.98 -0.40582 1072.29 0.801039C1075.53 1.88074 1077.98 4.07367 1079.64 7.37983L1120.21 88.4445C1126.07 100.143 1128.49 110.54 1127.48 119.634C1126.65 128.792 1123.32 136.743 1117.47 143.486C1111.62 150.23 1104.12 155.893 1094.97 160.476C1090.9 162.512 1086.41 164.358 1081.52 166.014C1076.62 167.67 1072.39 168.593 1068.83 168.786C1064.19 169.042 1060.47 168.281 1057.67 166.501C1055.06 164.785 1053.5 162.306 1052.99 159.063C1052.29 154.802 1052.86 151.336 1054.71 148.664C1056.61 146.12 1059.22 144.656 1062.53 144.273C1064.88 143.891 1068.03 143.508 1071.97 143.124C1075.98 142.868 1080.14 141.658 1084.46 139.494C1090.31 136.566 1094.73 133.321 1097.72 129.758C1100.9 126.259 1102.49 122.125 1102.48 117.356C1102.67 112.65 1101.14 107.054 1097.9 100.569L1091.5 87.7892L1097.8 90.362C1097.74 95.6404 1096.75 100.506 1094.85 104.958C1093 109.22 1090.21 113.164 1086.46 116.79C1082.71 120.417 1077.97 123.662 1072.25 126.526C1065.51 129.9 1058.83 131.333 1052.22 130.827C1045.67 130.131 1039.62 127.749 1034.09 123.681C1028.49 119.486 1023.91 113.828 1020.35 106.707L992.469 51.0111C990.814 47.7049 990.526 44.43 991.606 41.1862C992.622 37.8153 994.783 35.3024 998.089 33.6475C1001.4 31.9927 1004.7 31.7687 1008.01 32.9755C1011.25 34.0552 1013.7 36.2481 1015.36 39.5543L1039.8 88.3839C1043.94 96.6493 1048.64 101.608 1053.92 103.259C1059.27 104.719 1065.18 103.826 1071.66 100.58C1076.12 98.3524 1079.45 95.6482 1081.68 92.4676C1083.84 89.1598 1084.92 85.4391 1084.92 81.3055C1084.85 77.0447 1083.61 72.4983 1081.19 67.6662L1056.75 18.8366C1055.09 15.5305 1054.81 12.2555 1055.89 9.01173C1056.9 5.64082 1059.06 3.12792 1062.37 1.47306Z"
      />
    </motion.svg>
  )
}

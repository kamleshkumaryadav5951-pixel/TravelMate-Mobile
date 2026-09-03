import type { ScreenProps } from '../types';

export default function Onboarding({ navigate }: ScreenProps) {
  return (
    <div
      className="absolute inset-0 flex flex-col justify-between overflow-y-auto px-6 py-4 preserve-color"
      style={{
        background: '#ecefe9',
        fontFamily: 'var(--font-sans)',
      }}
    >
      {/* Top bar with Mountain Logo & Skip button */}
      <div className="relative flex items-center justify-center pt-2">
        {/* Mountain Airplane Logo */}
        <div className="flex flex-col items-center">
          <svg width="68" height="60" viewBox="0 0 76 66" fill="none">
            {/* Mountain shape */}
            <path
              d="M34 6C36 3 40 3 42 6L68 44C71 49 67 55 61 55H15C9 55 5 49 8 44L34 6Z"
              fill="#25573e"
            />
            {/* Second peak */}
            <path
              d="M48 20L63 42C66 47 62 52 57 52H42L48 20Z"
              fill="#1d4531"
            />
            {/* Airplane cutout / white plane */}
            <path
              d="M37 22L40 33L49 35L41 38L42 44L38 41L35 44L36 38L28 36L37 33Z"
              fill="#ffffff"
            />
            <path
              d="M38 22L40 33L49 35L42 37.5L40 33Z"
              fill="#e6f2eb"
            />
            {/* Soft shadow below logo */}
            <ellipse cx="38" cy="62" rx="14" ry="3.5" fill="#1d4531" fillOpacity="0.8" />
          </svg>
        </div>

        {/* Skip button in top right */}
        <button
          onClick={() => navigate('home')}
          className="absolute right-0 top-3 text-sm font-semibold text-gray-800 transition-opacity hover:opacity-75"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Skip
        </button>
      </div>

      {/* Main Title Section */}
      <div className="text-center mt-3">
        <h1
          className="text-gray-900 font-bold tracking-tight text-[32px] leading-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Welcome to
        </h1>
        <div className="mt-1 inline-block">
          <span
            className="inline-block bg-[#35774e] text-white font-bold text-[30px] px-4 py-0.5 rounded-lg tracking-tight"
            style={{ fontFamily: 'var(--font-display)', lineHeight: '1.2' }}
          >
            travelmate
          </span>
        </div>
      </div>

      {/* Illustration Section */}
      <div className="relative w-full flex items-center justify-center my-2" style={{ minHeight: 290 }}>
        <svg
          viewBox="0 0 340 310"
          className="w-full h-auto select-none"
          style={{ maxHeight: 305 }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background soft clouds */}
          <path
            d="M80 125C80 115 88 108 98 108C103 108 108 111 111 115C114 110 120 106 127 106C138 106 146 114 146 125H80Z"
            fill="#ffffff"
            fillOpacity="0.75"
          />
          <path
            d="M60 148C60 140 66 134 74 134C78 134 82 136 84 139C87 136 91 133 96 133C105 133 111 139 111 148H60Z"
            fill="#ffffff"
            fillOpacity="0.6"
          />
          <path
            d="M225 145C225 137 232 131 240 131C244 131 248 133 251 136C254 132 259 129 265 129C274 129 281 136 281 145H225Z"
            fill="#ffffff"
            fillOpacity="0.75"
          />

          {/* Golden horizontal capsule accent */}
          <rect
            x="215"
            y="152"
            width="55"
            height="11"
            rx="5.5"
            fill="#faeccb"
          />

          {/* Airplane floating badge */}
          <g>
            <circle cx="160" cy="116" r="16" fill="#2d6a4f" />
            {/* Plane icon */}
            <path
              d="M153 115L159 111L167 113L162 116L164 120L161 118L159 120L159 116L155 116Z"
              fill="#ffffff"
            />
          </g>

          {/* Hot Air Balloon */}
          <g>
            {/* Balloon Body */}
            {/* Left yellow stripe */}
            <path
              d="M174 120C170 105 174 88 185 80C188 77 192 75 197 74C190 85 186 102 186 120C186 129 188 136 191 142L181 136C176 131 174 126 174 120Z"
              fill="#f7c544"
            />
            {/* Center green stripe */}
            <path
              d="M197 74C204 74 211 76 217 80C224 86 226 98 224 112C222 124 217 134 211 142C206 142 201 142 191 142C197 132 200 120 200 108C200 95 198 83 197 74Z"
              fill="#37784d"
            />
            {/* Left green stripe */}
            <path
              d="M185 80C189 76 193 74 197 74C198 83 200 95 200 108C200 120 197 132 191 142C188 136 186 129 186 120C186 102 190 85 197 74Z"
              fill="#37784d"
            />
            {/* Main yellow background envelope */}
            <path
              d="M197 74C212 74 227 86 228 103C229 118 221 132 211 142H191C181 132 173 118 174 103C175 86 185 74 197 74Z"
              fill="#f6c543"
            />
            {/* Inner green stripes curve */}
            <path
              d="M197 74C192 84 189 98 189 112C189 124 192 135 197 142C202 135 205 124 205 112C205 98 202 84 197 74Z"
              fill="#37784d"
            />
            {/* Right green curved stripe */}
            <path
              d="M217 83C223 90 225 102 223 115C221 126 216 135 211 142C215 133 218 122 219 111C220 99 218 89 217 83Z"
              fill="#37784d"
            />
            {/* Left green outer stripe */}
            <path
              d="M177 83C171 90 169 102 171 115C173 126 178 135 183 142C179 133 176 122 175 111C174 99 176 89 177 83Z"
              fill="#37784d"
            />

            {/* Top cap */}
            <ellipse cx="197" cy="75" rx="8" ry="2.5" fill="#2d6a4f" />

            {/* Bottom collar */}
            <rect x="193" y="142" width="8" height="2.5" rx="1" fill="#2d6a4f" />

            {/* Ropes */}
            <line x1="194" y1="144.5" x2="194" y2="149" stroke="#2d6a4f" strokeWidth="1" />
            <line x1="200" y1="144.5" x2="200" y2="149" stroke="#2d6a4f" strokeWidth="1" />

            {/* Basket */}
            <rect x="192" y="149" width="10" height="7" rx="1.5" fill="#37784d" />
            <rect x="194" y="150" width="6" height="4" rx="0.5" fill="#25573e" />
          </g>

          {/* Distant mountains / background hill */}
          <path
            d="M125 215L150 170L185 225H125Z"
            fill="#e2dfd7"
            opacity="0.8"
          />
          <path
            d="M175 220L205 162L245 225H175Z"
            fill="#eae4d6"
          />

          {/* Dark Green Bush Mound under hiker */}
          <ellipse cx="205" cy="225" rx="40" ry="22" fill="#1e4632" />
          <ellipse cx="180" cy="235" rx="35" ry="18" fill="#163928" />

          {/* Main Rolling Green Hills */}
          {/* Back darker hill */}
          <path
            d="M140 260C180 200 280 210 320 250V310H140V260Z"
            fill="#2d6a4f"
          />
          {/* Main Front Grass Hill */}
          <path
            d="M130 265C170 190 280 195 320 230L320 310H120L130 265Z"
            fill="#449762"
          />
          {/* Left slope hill */}
          <path
            d="M130 265C150 205 170 250 170 310H115L130 265Z"
            fill="#52a672"
          />

          {/* Light rock / path ledge under adventurer */}
          <path
            d="M110 230L150 195L170 235L125 270Z"
            fill="#f7eedc"
          />

          {/* Right Hill Location Pin */}
          <g>
            <ellipse cx="270" cy="218" rx="14" ry="4" fill="#ffffff" fillOpacity="0.7" />
            <ellipse cx="270" cy="217" rx="10" ry="2.5" fill="#36784d" fillOpacity="0.2" />
            {/* Map Pin Head */}
            <path
              d="M270 175C260 175 252 183 252 193C252 206 270 220 270 220C270 220 288 206 288 193C288 183 280 175 270 175Z"
              fill="#f7c544"
            />
            {/* Inner circle of pin */}
            <circle cx="270" cy="191" r="5" fill="#fef6dd" />
          </g>

          {/* Large Stylized Leaves on Left */}
          <path
            d="M85 240C95 205 125 195 128 200C132 205 120 235 105 250C92 263 80 255 85 240Z"
            fill="#388055"
          />
          <path
            d="M98 250C108 215 138 205 141 210C145 215 133 245 118 260C105 273 93 265 98 250Z"
            fill="#275e3e"
          />
          <path
            d="M110 275C118 245 142 238 145 242C148 246 138 270 126 282C116 292 106 286 110 275Z"
            fill="#4ca06d"
          />

          {/* Large Stylized Leaves on Right */}
          <path
            d="M295 220C285 235 285 260 290 275C295 290 310 285 305 260C300 235 305 225 295 220Z"
            fill="#388055"
          />
          <path
            d="M280 238C272 250 272 270 276 282C280 294 292 290 288 270C284 250 288 242 280 238Z"
            fill="#275e3e"
          />
          <path
            d="M310 205C298 222 298 250 304 268C310 286 326 280 321 252C316 224 322 212 310 205Z"
            fill="#275e3e"
          />

          {/* HIKER / TRAVELER CHARACTER */}
          <g>
            {/* Backpack on hiker's back */}
            <path
              d="M152 170C146 170 142 175 142 185C142 196 146 205 153 205H158V170H152Z"
              fill="#1d3f4a"
            />
            <rect x="140" y="178" width="5" height="18" rx="2" fill="#295563" />
            <path d="M149 174C149 168 155 168 155 174" stroke="#e0e8e5" strokeWidth="2.5" fill="none" />

            {/* Left Leg (Standing Straight) */}
            <rect x="156" y="208" width="10" height="38" rx="4" fill="#265a3d" />
            <rect x="155" y="240" width="12" height="6" fill="#204d33" />
            {/* Left Shoe */}
            <path
              d="M150 252C150 250 154 246 160 246H168C172 246 173 249 173 252L171 256H147L150 252Z"
              fill="#f6c543"
            />
            <rect x="147" y="254" width="24" height="3" rx="1.5" fill="#ffffff" />

            {/* Right Leg (Bent Forward resting on rock mound) */}
            {/* Thigh (horizontal) */}
            <path
              d="M162 208C162 205 165 202 168 202H198C202 202 205 205 205 210C205 215 202 218 198 218H168C164 218 162 215 162 208Z"
              fill="#265a3d"
            />
            {/* Shin (vertical down) */}
            <rect x="194" y="208" width="10" height="32" rx="4" fill="#265a3d" />
            {/* Right Shoe */}
            <path
              d="M192 238C192 236 195 233 202 233H210C214 233 216 236 216 239L214 243H189L192 238Z"
              fill="#f6c543"
            />
            <rect x="189" y="241" width="26" height="3" rx="1.5" fill="#ffffff" />

            {/* Body / Torso (Green Collared Shirt) */}
            <path
              d="M154 172C154 168 158 165 163 165H175C180 165 184 168 184 172L182 210H156L154 172Z"
              fill="#37784d"
            />
            {/* White collar */}
            <path d="M165 165L168 172L172 165" stroke="#ffffff" strokeWidth="2" fill="none" />
            <line x1="168" y1="172" x2="168" y2="186" stroke="#275e3e" strokeWidth="1.5" />

            {/* Head & Neck */}
            <rect x="165" y="158" width="7" height="8" fill="#fcd0a1" />
            {/* Face Profile */}
            <path
              d="M163 150C163 144 168 140 174 140C179 140 183 144 183 150C183 156 179 160 174 160H166C164 160 163 158 163 150Z"
              fill="#fcd0a1"
            />
            {/* Eye & Smile */}
            <circle cx="177" cy="149" r="1.5" fill="#1a2a1e" />
            <path d="M176 154Q179 156 181 153" stroke="#c97d5d" strokeWidth="1" fill="none" />
            {/* Black hair */}
            <path d="M163 148C163 142 168 138 174 138H176C172 142 168 146 166 151Z" fill="#1a2a1e" />

            {/* Explorer Hat */}
            <path
              d="M154 143C154 141 160 138 174 138C188 138 194 141 194 143L191 145H157L154 143Z"
              fill="#438a5a"
            />
            {/* Hat Crown */}
            <path
              d="M161 141C161 131 166 126 174 126C182 126 186 131 186 141H161Z"
              fill="#37784d"
            />
            {/* Yellow Hat Band */}
            <rect x="161.5" y="139" width="24" height="2.5" fill="#f6c543" />

            {/* Arms holding Map */}
            {/* Left Arm */}
            <path
              d="M157 172C157 172 163 182 172 186"
              stroke="#37784d"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Right Arm */}
            <path
              d="M178 172C178 172 186 180 195 182"
              stroke="#37784d"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Hands */}
            <circle cx="174" cy="187" r="3.5" fill="#fcd0a1" />
            <circle cx="196" cy="184" r="3.5" fill="#fcd0a1" />

            {/* Folded Map (Golden Yellow) */}
            <g>
              {/* Fold 1 (left) */}
              <polygon points="172,176 182,173 182,203 172,206" fill="#f7c544" />
              {/* Fold 2 (center) */}
              <polygon points="182,173 194,177 194,207 182,203" fill="#ecd060" />
              {/* Fold 3 (right) */}
              <polygon points="194,177 206,172 206,202 194,207" fill="#f7c544" />
              {/* Map route markings */}
              <path d="M175 188 Q182 182 188 190 Q196 195 202 182" stroke="#e08620" strokeWidth="1.2" strokeDasharray="2 1.5" fill="none" />
              <circle cx="175" cy="188" r="1.5" fill="#d9480f" />
              <circle cx="202" cy="182" r="1.5" fill="#25573e" />
            </g>
          </g>
        </svg>
      </div>

      {/* Subtitle / Description */}
      <div className="text-center px-4">
        <p
          className="text-gray-800 text-[15px] leading-snug font-medium max-w-[280px] mx-auto"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Discover hidden gems and track every step of your journey with ease.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2.5 pt-3 pb-6">
        {/* Login Button */}
        <button
          onClick={() => navigate('login', { tab: 'signin' })}
          className="w-full py-4 rounded-full font-bold text-white text-[16px] transition-all active:scale-[0.98]"
          style={{
            background: '#37784d',
            fontFamily: 'var(--font-sans)',
            boxShadow: '0 4px 14px rgba(55, 120, 77, 0.25)',
          }}
        >
          Login
        </button>

        {/* Sign up Button */}
        <button
          onClick={() => navigate('login', { tab: 'signup' })}
          className="w-full py-4 rounded-full font-bold text-gray-900 text-[16px] transition-all active:scale-[0.98]"
          style={{
            background: '#ffffff',
            fontFamily: 'var(--font-sans)',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
            border: '1px solid rgba(0, 0, 0, 0.04)',
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

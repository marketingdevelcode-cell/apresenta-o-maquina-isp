import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the comparison-container block and replace it
old_start = content.find('                <div class="comparison-container">')
# Find end: the closing </div> of comparison-container followed by comp-conclusion
old_end = content.find('                </div>\n\n                <div class="comp-conclusion')

if old_start == -1 or old_end == -1:
    print("ERROR: markers not found")
    print("old_start:", old_start, "old_end:", old_end)
    exit(1)

new_block = '''                <div class="comparison-container">
                    <!-- Traditional Card -->
                    <div class="comp-card tradicional title-reveal">
                        <div class="comp-header">Operação Tradicional</div>
                        <div class="comp-viz">
                            <svg width="100%" height="100%" viewBox="0 0 420 295" style="display:block;">
                                <defs>
                                    <filter id="f-red"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                                    <marker id="arr-red" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                        <path d="M0,0 L6,3 L0,6 Z" fill="#FF4B4B" opacity="0.5"/>
                                    </marker>
                                </defs>
                                <g stroke="#FF4B4B" stroke-width="1" fill="none" opacity="0.3" marker-end="url(#arr-red)">
                                    <line x1="210" y1="52" x2="130" y2="110"/>
                                    <line x1="210" y1="52" x2="290" y2="110"/>
                                    <line x1="130" y1="122" x2="68" y2="182"/>
                                    <line x1="130" y1="122" x2="155" y2="182"/>
                                    <line x1="290" y1="122" x2="265" y2="182"/>
                                    <line x1="290" y1="122" x2="352" y2="182"/>
                                    <path d="M68,195 Q210,245 352,195" stroke-dasharray="5 4" opacity="0.18" marker-end="none"/>
                                    <line x1="130" y1="110" x2="352" y2="182" opacity="0.1" marker-end="none"/>
                                    <line x1="290" y1="110" x2="68" y2="182" opacity="0.1" marker-end="none"/>
                                </g>
                                <!-- L0: Manager -->
                                <g transform="translate(210,42)" filter="url(#f-red)">
                                    <circle r="11" fill="#1a0505" stroke="#FF4B4B" stroke-width="1.5"/>
                                    <circle cy="-3" r="4" fill="#FF4B4B" opacity="0.9"/>
                                    <path d="M-5,3 Q0,12 5,3" fill="#FF4B4B" opacity="0.7"/>
                                    <line x1="-4" y1="-6" x2="4" y2="2" stroke="white" stroke-width="1.5" opacity="0.8"/>
                                    <line x1="4" y1="-6" x2="-4" y2="2" stroke="white" stroke-width="1.5" opacity="0.8"/>
                                </g>
                                <!-- L1: Supervisors -->
                                <g transform="translate(130,116)">
                                    <circle r="10" fill="#1a0505" stroke="#FF4B4B" stroke-width="1.5" opacity="0.85"/>
                                    <circle cy="-2" r="3.5" fill="#FF4B4B" opacity="0.8"/>
                                    <path d="M-4,3 Q0,11 4,3" fill="#FF4B4B" opacity="0.6"/>
                                </g>
                                <g transform="translate(290,116)">
                                    <circle r="10" fill="#1a0505" stroke="#FF4B4B" stroke-width="1.5" opacity="0.85"/>
                                    <circle cy="-2" r="3.5" fill="#FF4B4B" opacity="0.8"/>
                                    <path d="M-4,3 Q0,11 4,3" fill="#FF4B4B" opacity="0.6"/>
                                </g>
                                <!-- L2: Operators -->
                                <g transform="translate(68,192)">
                                    <circle r="9" fill="#1a0505" stroke="#FF4B4B" stroke-width="1" opacity="0.7"/>
                                    <circle cy="-2" r="3" fill="#FF4B4B" opacity="0.7"/>
                                    <path d="M-3,3 Q0,10 3,3" fill="#FF4B4B" opacity="0.55"/>
                                </g>
                                <g transform="translate(155,192)">
                                    <circle r="9" fill="#1a0505" stroke="#FF4B4B" stroke-width="1" opacity="0.7"/>
                                    <circle cy="-2" r="3" fill="#FF4B4B" opacity="0.7"/>
                                    <path d="M-3,3 Q0,10 3,3" fill="#FF4B4B" opacity="0.55"/>
                                </g>
                                <g transform="translate(265,192)">
                                    <circle r="9" fill="#1a0505" stroke="#FF4B4B" stroke-width="1" opacity="0.7"/>
                                    <circle cy="-2" r="3" fill="#FF4B4B" opacity="0.7"/>
                                    <path d="M-3,3 Q0,10 3,3" fill="#FF4B4B" opacity="0.55"/>
                                </g>
                                <g transform="translate(352,192)">
                                    <circle r="9" fill="#1a0505" stroke="#FF4B4B" stroke-width="1" opacity="0.7"/>
                                    <circle cy="-2" r="3" fill="#FF4B4B" opacity="0.7"/>
                                    <path d="M-3,3 Q0,10 3,3" fill="#FF4B4B" opacity="0.55"/>
                                </g>
                                <!-- Bloated base -->
                                <g fill="#FF4B4B" opacity="0.25">
                                    <circle cx="38"  cy="248" r="5"/><circle cx="78"  cy="248" r="5"/>
                                    <circle cx="118" cy="248" r="5"/><circle cx="158" cy="248" r="5"/>
                                    <circle cx="198" cy="248" r="5"/><circle cx="238" cy="248" r="5"/>
                                    <circle cx="278" cy="248" r="5"/><circle cx="318" cy="248" r="5"/>
                                    <circle cx="358" cy="248" r="5"/><circle cx="398" cy="248" r="5"/>
                                </g>
                                <!-- Error badges -->
                                <g font-family="monospace" font-size="9" font-weight="700">
                                    <rect x="222" y="58" width="58" height="15" rx="4" fill="#FF4B4B"/>
                                    <text x="251" y="70" fill="white" text-anchor="middle">LENTIDAO</text>
                                    <rect x="34"  y="152" width="40" height="15" rx="4" fill="#FF4B4B"/>
                                    <text x="54"  y="164" fill="white" text-anchor="middle">ERRO</text>
                                    <rect x="156" y="213" width="38" height="15" rx="4" fill="#FF4B4B"/>
                                    <text x="175" y="225" fill="white" text-anchor="middle">FALHA</text>
                                </g>
                                <text x="210" y="283" text-anchor="middle" font-family="monospace" font-size="9.5" fill="#FF4B4B" opacity="0.6">Mais clientes = mais contratacoes</text>
                            </svg>
                        </div>
                        <ul class="comp-list">
                            <li>Reativo e horário comercial (9h às 18h).</li>
                            <li>Custo operacional crescente atrelado ao crescimento da base.</li>
                            <li>Falta de padronização e perda de contexto.</li>
                        </ul>
                    </div>

                    <!-- Autonomous Card -->
                    <div class="comp-card autonoma title-reveal" style="transition-delay: 0.1s;">
                        <div class="comp-header">Operação Autônoma</div>
                        <div class="comp-viz">
                            <svg width="100%" height="100%" viewBox="0 0 420 295" style="display:block;">
                                <defs>
                                    <filter id="f-green"><feGaussianBlur stdDeviation="7" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                                    <radialGradient id="ai-grd" cx="50%" cy="50%" r="50%">
                                        <stop offset="0%" stop-color="#4BFF8A" stop-opacity="0.35"/>
                                        <stop offset="100%" stop-color="#0057FF" stop-opacity="0"/>
                                    </radialGradient>
                                    <marker id="arr-grn" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                        <path d="M0,0 L6,3 L0,6 Z" fill="#4BFF8A" opacity="0.7"/>
                                    </marker>
                                </defs>
                                <circle cx="210" cy="147" r="60" fill="url(#ai-grd)"/>
                                <g stroke="#4BFF8A" stroke-width="1.5" opacity="0.5" marker-end="url(#arr-grn)">
                                    <line x1="188" y1="132" x2="90" y2="72"/>
                                    <line x1="185" y1="147" x2="62" y2="147"/>
                                    <line x1="188" y1="162" x2="90" y2="222"/>
                                    <line x1="232" y1="132" x2="310" y2="72"/>
                                    <line x1="235" y1="147" x2="340" y2="100"/>
                                    <line x1="232" y1="162" x2="310" y2="222"/>
                                    <line x1="355" y1="90"  x2="378" y2="72"  stroke-width="1"/>
                                    <line x1="355" y1="100" x2="378" y2="100" stroke-width="1"/>
                                    <line x1="355" y1="110" x2="378" y2="128" stroke-width="1"/>
                                </g>
                                <!-- AI Core -->
                                <circle cx="210" cy="147" r="34" fill="#060913" stroke="#4BFF8A" stroke-width="2" filter="url(#f-green)"/>
                                <rect x="196" y="133" width="28" height="28" rx="4" fill="none" stroke="#4BFF8A" stroke-width="1.5"/>
                                <rect x="201" y="138" width="18" height="18" rx="2" fill="#4BFF8A" opacity="0.1"/>
                                <text x="210" y="154" text-anchor="middle" font-size="11" font-weight="900" fill="#4BFF8A" font-family="monospace">AI</text>
                                <g stroke="#4BFF8A" stroke-width="1.2">
                                    <line x1="200" y1="131" x2="200" y2="125"/><line x1="208" y1="131" x2="208" y2="125"/><line x1="216" y1="131" x2="216" y2="125"/>
                                    <line x1="200" y1="163" x2="200" y2="169"/><line x1="208" y1="163" x2="208" y2="169"/><line x1="216" y1="163" x2="216" y2="169"/>
                                    <line x1="178" y1="139" x2="184" y2="139"/><line x1="178" y1="147" x2="184" y2="147"/><line x1="178" y1="155" x2="184" y2="155"/>
                                    <line x1="236" y1="139" x2="242" y2="139"/><line x1="236" y1="147" x2="242" y2="147"/><line x1="236" y1="155" x2="242" y2="155"/>
                                </g>
                                <!-- Robot nodes left -->
                                <g fill="none" stroke="#4BFF8A">
                                    <g transform="translate(78,72)" opacity="0.9">
                                        <rect x="-14" y="-12" width="28" height="24" rx="5" fill="#060913" stroke-width="1.5"/>
                                        <circle cx="-5" cy="-2" r="3.5" fill="#4BFF8A" stroke="none"/>
                                        <circle cx="5" cy="-2" r="3.5" fill="#4BFF8A" stroke="none"/>
                                        <rect x="-4" y="5" width="8" height="3" rx="1" fill="#4BFF8A" stroke="none" opacity="0.6"/>
                                        <line x1="0" y1="-12" x2="0" y2="-19" stroke-width="1.5"/>
                                        <circle cx="0" cy="-21" r="2.5" fill="#4BFF8A" stroke="none"/>
                                    </g>
                                    <g transform="translate(50,147)" opacity="0.9">
                                        <rect x="-14" y="-12" width="28" height="24" rx="5" fill="#060913" stroke-width="1.5"/>
                                        <circle cx="-5" cy="-2" r="3.5" fill="#4BFF8A" stroke="none"/>
                                        <circle cx="5" cy="-2" r="3.5" fill="#4BFF8A" stroke="none"/>
                                        <rect x="-4" y="5" width="8" height="3" rx="1" fill="#4BFF8A" stroke="none" opacity="0.6"/>
                                        <line x1="0" y1="-12" x2="0" y2="-19" stroke-width="1.5"/>
                                        <circle cx="0" cy="-21" r="2.5" fill="#4BFF8A" stroke="none"/>
                                    </g>
                                    <g transform="translate(78,222)" opacity="0.9">
                                        <rect x="-14" y="-12" width="28" height="24" rx="5" fill="#060913" stroke-width="1.5"/>
                                        <circle cx="-5" cy="-2" r="3.5" fill="#4BFF8A" stroke="none"/>
                                        <circle cx="5" cy="-2" r="3.5" fill="#4BFF8A" stroke="none"/>
                                        <rect x="-4" y="5" width="8" height="3" rx="1" fill="#4BFF8A" stroke="none" opacity="0.6"/>
                                        <line x1="0" y1="-12" x2="0" y2="-19" stroke-width="1.5"/>
                                        <circle cx="0" cy="-21" r="2.5" fill="#4BFF8A" stroke="none"/>
                                    </g>
                                </g>
                                <!-- Supervisor right -->
                                <g transform="translate(340,100)" fill="none" stroke="#4BFF8A">
                                    <circle r="12" fill="#060913" stroke-width="1.5" cx="0" cy="0"/>
                                    <circle cy="-4" r="4" fill="#4BFF8A" stroke="none"/>
                                    <path d="M-5,2 Q0,13 5,2" fill="#4BFF8A" stroke="none" opacity="0.8"/>
                                    <polyline points="-4,5 -1,9 5,1" stroke="#4BFF8A" stroke-width="1.8" fill="none" transform="translate(5,2)"/>
                                </g>
                                <!-- Task checkboxes right -->
                                <g fill="none">
                                    <rect x="370" y="62"  width="22" height="20" rx="4" fill="#060913" stroke="#4BFF8A" stroke-width="1"/>
                                    <polyline points="375,72 378,76 387,66" stroke="#4BFF8A" stroke-width="1.8"/>
                                    <rect x="370" y="90"  width="22" height="20" rx="4" fill="#060913" stroke="#4BFF8A" stroke-width="1"/>
                                    <polyline points="375,100 378,104 387,94" stroke="#4BFF8A" stroke-width="1.8"/>
                                    <rect x="370" y="118" width="22" height="20" rx="4" fill="#060913" stroke="#4BFF8A" stroke-width="1"/>
                                    <polyline points="375,128 378,132 387,122" stroke="#4BFF8A" stroke-width="1.8"/>
                                </g>
                                <text x="210" y="283" text-anchor="middle" font-family="monospace" font-size="9.5" fill="#4BFF8A" opacity="0.6">Mais clientes = custo fixo</text>
                            </svg>
                        </div>
                        <ul class="comp-list">
                            <li>Preditivo e funcionamento 24/7.</li>
                            <li>Custo fixo com governança, desvinculado do volume de chamados.</li>
                            <li>Aderência 100% aos processos e histórico centralizado.</li>
                        </ul>
                    </div>
                </div>'''

content = content[:old_start] + new_block + content[old_end + len('                </div>'):]

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("SUCCESS: Slide 3 visualization replaced.")

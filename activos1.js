// Lista de símbolos o contratos para activos1.html
// Puedes agregar símbolos (ej: BTC, ETH) o direcciones de contrato (0x...):
const SYMBOLS_LIST = `
BTC
ETH
USDT
XRP
SOL
HYPE
ZEC
SUI
ASTER
AAVE
ONDO
PUMP
KAS
ARB
RENDER
AERO
NEXO
XPL
AR
LINEA
XPIN
RON
MMT
THE
FOXY
0x2E8c31162b855A2ffa90F6F8634643Ad6F111e18
`;

// Mapeo de símbolos conocidos a sus IDs de CoinGecko
const SYMBOL_TO_COIN = {
    'BTC': { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin' },
    'ETH': { id: 'ethereum', symbol: 'ETH', name: 'Ethereum' },
    'USDT': { id: 'tether', symbol: 'USDT', name: 'Tether' },
    'BNB': { id: 'binancecoin', symbol: 'BNB', name: 'BNB' },
    'XRP': { id: 'ripple', symbol: 'XRP', name: 'XRP' },
    'SOL': { id: 'solana', symbol: 'SOL', name: 'Solana' },
    'HYPE': { id: 'hyperliquid', symbol: 'HYPE', name: 'Hyperliquid' },
    'ZEC': { id: 'zcash', symbol: 'ZEC', name: 'Zcash' },
    'XMR': { id: 'monero', symbol: 'XMR', name: 'Monero' },
    'SUI': { id: 'sui', symbol: 'SUI', name: 'Sui' },
    'AVAX': { id: 'avalanche-2', symbol: 'AVAX', name: 'Avalanche' },
    'TAO': { id: 'bittensor', symbol: 'TAO', name: 'Bittensor' },
    'ONDO': { id: 'ondo-finance', symbol: 'ONDO', name: 'Ondo' },
    'MNT': { id: 'mantle', symbol: 'MNT', name: 'Mantle' },
    'AAVE': { id: 'aave', symbol: 'AAVE', name: 'Aave' },
    'RENDER': { id: 'render-token', symbol: 'RENDER', name: 'Render' },
    'KAS': { id: 'kaspa', symbol: 'KAS', name: 'Kaspa' },
    'ARB': { id: 'arbitrum', symbol: 'ARB', name: 'Arbitrum' },
    'NEXO': { id: 'nexo', symbol: 'NEXO', name: 'Nexo' },
    'PUMP': { id: 'pump-fun', symbol: 'PUMP', name: 'Pump.fun' },
    'AERO': { id: 'aerodrome-finance', symbol: 'AERO', name: 'Aerodrome Finance' },
    'XPL': { id: 'plasma', symbol: 'XPL', name: 'Plasma' },
    'AR': { id: 'arweave', symbol: 'AR', name: 'Arweave' },
    'XPIN': { id: 'xpin-network', symbol: 'XPIN', name: 'XPIN Network' },
    'RON': { id: 'ronin', symbol: 'RON', name: 'Ronin' },
    'LINEA': { id: 'linea', symbol: 'LINEA', name: 'Linea' },
    'MMT': { id: 'momentum-3', symbol: 'MMT', name: 'Momentum' },
    'THE': { id: 'thena', symbol: 'THE', name: 'THENA' },
    'FOXY': { id: 'foxy', symbol: 'FOXY', name: 'Foxy' },
    'ASTER': { id: 'aster-2', symbol: 'ASTER', name: 'Aster' }
};

// Mapeo opcional de contratos a sus datos (id de CoinGecko o plataforma/red):
const CONTRACTS_MAP = {
    '0x2e8c31162b855a2ffa90f6f8634643ad6f111e18': {
        id: 'artificial-inu-3',
        symbol: 'AI',
        name: 'Artificial Inu',
        platform: 'robinhood'
    }
};

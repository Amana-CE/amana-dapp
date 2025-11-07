# AmanaDapp

> Blockchain-powered SACCO operations on Cardano - Transforming cooperative finance through tokenization and transparency



## 🌍 Overview

AmanaDapp is a decentralized application for managing cooperative finance (SACCO) operations on the Cardano blockchain. It provides smart contract-based automation for entity management, member identity, treasury operations, and democratic governance.

### Key Features

- **🏛️ Entity Registry**: Smart contract-based SACCO creation and member management
- **👤 Member NFTs**: Unique on-chain identity certificates with embedded metadata
- **💰 Treasury Management**: Multi-signature treasury with atomic operations
- **🗳️ Democratic Governance**: NFT-gated voting with automated proposal execution
- **📊 On-chain Transparency**: All operations recorded immutably on Cardano


## 🏗️ Architecture

### Technology Stack

| Component | Technology |
|-----------|-----------|
| **Blockchain** | Cardano (Preprod/Preview Testnet, Mainnet-ready) |
| **Smart Contracts** | Aiken (Cardano-native functional language) |
| **Blockchain Integration** | Lucid Evolution |
| **Wallet Integration** | Mesh SDK (multi-wallet support) |
| **Frontend** | Next.js 14 with TypeScript |
| **Styling** | Tailwind CSS + Radix UI |
| **Blockchain API** | Blockfrost |
| **State Management** | React Context + localStorage |
| **Backend** | Node.js with Express |
| **Database** | MongoDB (off-chain data) |

### Smart Contract Architecture

#### 1. Entity Registry Validator (`validators/entity_registry/entity_registry.ak`)
Manages SACCO creation and member management with the following capabilities:
- Entity creation with founding member
- Member addition/removal with linked NFT minting
- Admin management
- Member status updates (Active/Inactive/Suspended)

#### 2. Member NFT Policy (`validators/nft_policy/member_nft.ak`)
Mints unique member identity NFTs atomically linked to entity registry operations:
- One NFT per member per entity
- Atomic transaction linking with registry updates
- Prevents unauthorized minting
- Supports member removal (NFT burning)

#### 3. Treasury Management Validator (`validators/treasury_management/treasury_management.ak`)
Secure multi-signature treasury operations:
- Contribution tracking with NFT verification
- Transaction proposals and approval workflow
- Multi-signature execution
- Complete audit trail
- Governance integration

#### 4. Governance Validator (`validators/governance/governance.ak`)
Democratic decision-making with NFT-based verification:
- Proposal creation (NFT-gated)
- Multi-option voting (For/Against/Abstain)
- Automatic execution upon threshold
- Cross-contract operations
- Parameter management

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm/yarn
- **Aiken** installed via aikup ([Installation Guide](https://aiken-lang.org/installation-instructions))
- **Cardano Wallet** (Eternl, Nami, or Flint)
- **Blockfrost API Key** ([Get one here](https://blockfrost.io/))

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-org/amanadapp.git
cd amanadapp
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Network Configuration (Preview, Preprod, or Mainnet)
NETWORK=Preview

# Blockfrost API Configuration
NEXT_PUBLIC_BLOCKFROST_PROJECT_ID=your_blockfrost_project_id

# Deployment Configuration
MNEMONIC=your_mnemonic_phrase_for_deployment
```

4. **Compile smart contracts**

If you need to modify or recompile the Aiken smart contracts:

```bash
# Install Aiken if not already installed
curl --proto '=https' --tlsv1.2 -LsSf https://install.aiken-lang.org | sh

# Build contracts
aiken build
```

5. **Deploy smart contracts** (Optional - for new deployments)

```bash
# Deploy Entity Registry
npm run deploy:entity-registry

# Deploy Member NFT Policy
npm run deploy:member-nft

# Deploy Treasury Management
npm run deploy:treasury

# Deploy Governance
npm run deploy:governance
```

6. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📱 Usage

### For SACCO Administrators

1. **Connect Your Wallet**
   - Click "Connect Wallet" and select your Cardano wallet
   - Ensure you're on the correct network (Preview/Preprod for testing)

2. **Create a New Entity**
   - Navigate to "Entity Registry"
   - Fill in your SACCO's name and description
   - Submit the transaction and wait for confirmation
   - Your entity is now live on the blockchain!

3. **Add Members**
   - Select your entity
   - Click "Add Member"
   - Enter member details
   - Member receives a unique NFT upon confirmation

4. **Manage Treasury**
   - Navigate to "Treasury Management"
   - Configure multi-signature settings
   - Track contributions in real-time
   - Propose and approve transactions

5. **Create Governance Proposals**
   - Navigate to "Governance"
   - Create proposal with details and voting deadline
   - Members vote using their NFTs
   - Proposals execute automatically upon approval

### For SACCO Members

1. **Receive Your Member NFT**
   - Your admin will add you to the entity
   - You'll receive a unique NFT in your wallet
   - This NFT grants you voting rights and member privileges

2. **Participate in Governance**
   - View active proposals
   - Cast your vote (For/Against/Abstain)
   - Track proposal status in real-time

3. **Make Contributions**
   - Navigate to "Treasury"
   - Submit contribution with amount
   - Transaction is recorded on-chain

4. **Request Loans**
   - Create a loan proposal
   - Members vote on approval
   - Funds automatically disbursed upon approval

## 🔧 Development

### Project Structure

```
amanadapp/
├── app/                          # Next.js app directory
│   ├── page.tsx                  # Landing page
│   ├── entity-registry/          # Entity management pages
│   ├── treasury/                 # Treasury management pages
│   └── governance/               # Governance pages
├── components/                   # React components
│   ├── ui/                       # Radix UI components
│   └── wallet/                   # Wallet connection components
├── hooks/                        # Custom React hooks
│   ├── useEntityRegistry.ts      # Entity registry interactions
│   ├── useTreasury.ts           # Treasury interactions
│   └── useGovernance.ts         # Governance interactions
├── lib/                          # Utility libraries
│   └── cardano/                 # Cardano integration utilities
├── validators/                   # Aiken smart contracts
│   ├── entity_registry/         # Entity registry validator
│   ├── nft_policy/              # Member NFT minting policy
│   ├── treasury_management/     # Treasury validator
│   └── governance/              # Governance validator
├── contract-deployment/          # Smart contract deployment scripts
│   ├── deploy-entity-registry.ts
│   ├── deploy-member-nft.ts
│   ├── deploy-treasury.ts
│   └── deploy-governance.ts
├── plutus.json                   # Compiled smart contracts blueprint
├── aiken.toml                    # Aiken project configuration
└── package.json                  # Node.js dependencies
```

### Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Smart Contract Deployment
npm run deploy:entity-registry    # Deploy entity registry
npm run deploy:member-nft         # Deploy member NFT policy
npm run deploy:treasury           # Deploy treasury management
npm run deploy:governance         # Deploy governance

# Aiken Commands
aiken build              # Compile smart contracts
aiken check              # Type-check and run tests
aiken docs               # Generate documentation
aiken test               # Run smart contract tests
```

### Testing Smart Contracts

```bash
# Run all tests
aiken check

# Run specific test file
aiken check -m validators/entity_registry

# Run with verbose output
aiken check --verbose

# Generate test coverage
aiken build --trace-level verbose
```

## 🌐 Networks

### Testnet (Development)

- **Preview Testnet**: For development and testing
- **Preprod Testnet**: For pre-production testing
- **Faucet**: [Cardano Testnet Faucet](https://docs.cardano.org/cardano-testnet/tools/faucet/)

### Mainnet (Production)

Ready for deployment to Cardano mainnet. Ensure thorough testing on testnets first.

### Block Explorers

- **Preview**: [preview.cardanoscan.io](https://preview.cardanoscan.io/)
- **Preprod**: [preprod.cardanoscan.io](https://preprod.cardanoscan.io/)
- **Mainnet**: [cardanoscan.io](https://cardanoscan.io/)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🔒 Security

- Smart contracts audited by [Auditor Name]
- Multi-signature treasury management
- Hardware wallet integration supported
- Regular security updates and patches

Report security vulnerabilities to: security@amanadapp.io

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- Cardano Foundation for blockchain infrastructure
- Aiken Team for the smart contract language
- Mesh SDK for wallet integration
- Blockfrost for API services




---

**Built for cooperative finance on Cardano**

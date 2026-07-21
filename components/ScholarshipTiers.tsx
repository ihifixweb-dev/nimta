import { scholarshipTiers } from '@/lib/data/tiers';

export default function ScholarshipTiers() {
  return (
    <div className="tiers">
      {scholarshipTiers.map((tier) => (
        <div key={tier.tag} className={`tier tier-${tier.variant}`}>
          <div className="tier-tag">{tier.tag}</div>
          <div className="tier-pc">{tier.percent}</div>
          <div className="tier-name">{tier.name}</div>
          <div className="tier-who">{tier.description}</div>
          <div className="tier-note">{tier.note}</div>
        </div>
      ))}
    </div>
  );
}

import CardArmrStrss from './CardArmrStrss'
import CardAttributes from './CardAttributes'
import CardCombat from './CardCombat'
import CardConditions from './CardConditions'
import CardDeath from './CardDeath'
import CardDifficulty from './CardDifficulty'
import CardEnemy from './CardEnemy'
import CardEnemyStats from './CardEnemyStats'
import CardFear from './CardFear'
import CardFearTracker from './CardFearTracker'
import CardEncounterFear from './CardEncounterFear'
import CardHope from './CardHope'
import CardImage from './CardImage'
import CardPrices from './CardPrices'
import CardRange from './CardRange'
import CardRest from './CardRest'
import CardRolls from './CardRolls'
import CardSpotlight from './CardSpotlight'
import CardTeamwork from './CardTeamwork'
import CardText from './CardText'

const CardComponents: Record<string, React.FC<any>> = {
  armrStrss: CardArmrStrss,
  attributes: CardAttributes,
  combat: CardCombat,
  conditions: CardConditions,
  death: CardDeath,
  difficulty: CardDifficulty,
  enemy: CardEnemy,
  enemyStats: CardEnemyStats,
  fear: CardFear,
  fearTracker: CardFearTracker,
  encounterFear: CardEncounterFear,
  hope: CardHope,
  image: CardImage,
  prices: CardPrices,
  range: CardRange,
  rest: CardRest,
  rolls: CardRolls,
  spotlight: CardSpotlight,
  teamwork: CardTeamwork,
  text: CardText,
};

export default CardComponents;

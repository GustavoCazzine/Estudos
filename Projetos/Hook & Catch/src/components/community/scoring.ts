
// Sistema de pontuação para capturas de pesca
// Pontos são calculados com base na espécie, peso e comprimento do peixe

// Fator de raridade para diferentes espécies (valores maiores = mais raros = mais pontos)
const speciesRarityFactor: Record<string, number> = {
  // Peixes de água doce comuns
  'Tilápia': 0.8,
  'Traíra': 1.0,
  'Lambari': 0.5,
  'Carpa': 0.9,
  
  // Peixes de água doce mais valiosos
  'Tucunaré': 1.5,
  'Dourado': 1.8,
  'Pintado': 1.6,
  'Pirarucu': 2.5,
  'Tambaqui': 1.4,
  'Jaú': 2.0,
  'Pirarara': 1.7,
  
  // Peixes marinhos comuns
  'Tainha': 0.7,
  'Robalo': 1.2,
  'Corvina': 0.9,
  
  // Peixes marinhos mais valiosos
  'Atum': 1.5,
  'Marlim': 2.2,
  'Peixe-espada': 1.3,
  'Badejo': 1.6,
  'Garoupa': 1.7,
  'Olho-de-boi': 1.5,
  'Pargo': 1.3,
  
  // Peixes de pesca esportiva
  'Peixe-vela': 2.3,
  'Tarpão': 2.0,
  'Bicuda': 1.5,
  'Sarda': 1.1,
  'Cavala': 1.3,
  'Dourado-do-mar': 1.8,
  
  // Valor padrão para espécies não listadas
  'default': 1.0
};

/**
 * Calcula a pontuação para uma captura de peixe
 * @param species Nome da espécie do peixe
 * @param weight Peso do peixe em kg
 * @param length Comprimento do peixe em cm
 * @returns Pontuação calculada
 */
export const calculateFishScore = (species: string, weight: number, length: number): number => {
  // Verificar se a espécie existe no nosso catálogo, caso contrário usa o valor padrão
  const rarityFactor = speciesRarityFactor[species] || speciesRarityFactor.default;
  
  // Fórmula base: (peso * 10) + (comprimento * 2)
  const baseScore = (weight * 10) + (length * 2);
  
  // Aplicar o fator de raridade da espécie
  const speciesScore = baseScore * rarityFactor;
  
  // Bônus para peixes muito grandes (em relação ao padrão da espécie)
  const sizeBonus = weight > 10 ? weight * 5 : 0;
  
  // Calcular pontuação final arredondada para o inteiro mais próximo
  const finalScore = Math.round(speciesScore + sizeBonus);
  
  return finalScore;
};

/**
 * Calcula nível/ranking do usuário com base na pontuação total
 * @param totalScore Pontuação total do usuário
 * @returns Objeto com o nível e título do usuário
 */
export const calculateUserRank = (totalScore: number): { level: number; title: string } => {
  if (totalScore < 100) {
    return { level: 1, title: 'Iniciante' };
  } else if (totalScore < 500) {
    return { level: 2, title: 'Amador' };
  } else if (totalScore < 1000) {
    return { level: 3, title: 'Intermediário' };
  } else if (totalScore < 2500) {
    return { level: 4, title: 'Avançado' };
  } else if (totalScore < 5000) {
    return { level: 5, title: 'Experiente' };
  } else if (totalScore < 10000) {
    return { level: 6, title: 'Especialista' };
  } else if (totalScore < 20000) {
    return { level: 7, title: 'Mestre' };
  } else {
    return { level: 8, title: 'Lenda da Pesca' };
  }
};

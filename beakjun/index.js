function solution(skill, skill_trees) {
  let skillArr = skill.split("");
  var answer = 0;
  //스킬트리 for문 확인
  for (let i = 0; i < skill_trees.length; i++) {
    let lernSkill = [...skillArr];
    let isPass = true;
    //각 스킬트리 2중 for 문
    for (let j = 0; j < skill_trees[i].length; j++) {
      // 처음 스킬 선행 되는지 체크
      if (lernSkill.indexOf(skill_trees[i][j]) !== -1) {
        if (skill_trees[i][j] === lernSkill[0]) {
          lernSkill.shift();
        } else {
          isPass = false;
          break;
        }
      }
    }
    if (isPass) {
      answer++;
    }
  }
  //안되면 break
  //다 되면 카운트
  // return answer;
  // return skill_trees[0][0] in skillArr;
  // return skill_trees[0][0];
  return answer;
}

console.log(solution("CBD", ["CBADF", "AECB", "BDA"]));

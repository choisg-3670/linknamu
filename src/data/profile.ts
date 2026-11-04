export type Tag = { emoji: string; label: string };

export type LinkIcon = "linkedin" | "link";

export type LinkItem = {
  id: string;
  title: string;
  url: string;
  description?: string;
  icon?: LinkIcon;
};

export type Profile = {
  name: string;
  initials: string;
  /** public/ 아래 이미지 경로 (예: "/profile.jpg"). 없으면 이니셜을 보여 준다. */
  photo?: string;
  bio: string;
  tags: Tag[];
  links: LinkItem[];
};

export const profile: Profile = {
  name: "최성규",
  initials: "SG",
  bio: "지구물리. 그 중에서도 지자기와 코딩에 관심 많은 Research Specialist 입니다.",
  tags: [
    { emoji: "🎮", label: "게임" },
    { emoji: "🎹", label: "피아노" },
    { emoji: "✈️", label: "여행" },
  ],
  // 여기에 링크를 추가하면 카드가 하나씩 늘어납니다.
  links: [
    {
      id: "linkedin",
      title: "LinkedIn",
      description: "경력과 연구 이력",
      url: "https://www.linkedin.com/in/%EC%84%B1%EA%B7%9C-%EC%B5%9C-19a3b93aa/",
      icon: "linkedin",
    },
  ],
};

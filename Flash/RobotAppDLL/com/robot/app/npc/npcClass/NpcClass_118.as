package com.robot.app.npc.npcClass
{
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class NpcClass_118
   {
       
      
      public function NpcClass_118()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.KAPAIJUEDOUSHI,["暗金始祖灵兽和迈尔斯，我知道，你一定是为他们来得吧。"],["没错"],[function():void
         {
            NpcDialog.show(NPC.KAPAIJUEDOUSHI,["暗金始祖灵兽是获得暗金之力的草系精灵，与暗金炎魔、暗金鱼龙王一起组成了暗金三系之王。迈尔斯是第二只圣灵系精灵，它驻守着幻影星，拥有不输谱尼的超高人气。"],["怎么才能获得"],[function():void
            {
               NpcDialog.show(NPC.KAPAIJUEDOUSHI,["当然是找到“精灵召唤卡”啊，你不会不知道吧？"],["那精灵召唤卡去哪找"],[function():void
               {
                  NpcDialog.show(NPC.KAPAIJUEDOUSHI,["这已经是所有小赛尔都知道的秘密了"],["那到底是什么呢？"],[function():void
                  {
                     NpcDialog.show(NPC.KAPAIJUEDOUSHI,["《赛尔号：精灵决斗卡》第二弹里就有迈尔斯和暗金始祖灵兽的精灵召唤卡."],["哦，呵呵，其实我早知道了"],[function():void
                     {
                        NpcDialog.show(NPC.KAPAIJUEDOUSHI,["知道了还来问我，有这时间，你还不如去玩两次疾风决斗呢"],["就这么愉快的决定了。"],[function():void
                        {
                        }]);
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
   }
}

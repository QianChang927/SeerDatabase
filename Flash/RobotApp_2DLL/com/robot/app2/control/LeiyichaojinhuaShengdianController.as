package com.robot.app2.control
{
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class LeiyichaojinhuaShengdianController
   {
       
      
      public function LeiyichaojinhuaShengdianController()
      {
         super();
      }
      
      public static function init() : void
      {
         var dialogArr:Array = null;
         var questionArr:Array = null;
         var handlerArr:Array = null;
         if(MapManager.currentMap.id != 77)
         {
            dialogArr = [MainManager.actorInfo.formatNick + "，赛尔号周年庆！快来参加我的超进化盛典震撼开幕！谁才是你心在的超进化王者？学习力、百万经验、绝版精灵等你来拿！"];
            questionArr = ["我要去活动中心参加！","我准备一下再来！"];
            handlerArr = [function():void
            {
               MapManager.changeMap(77);
            }];
            NpcDialog.show(NPC.SHIPER,dialogArr,questionArr,handlerArr);
         }
      }
   }
}

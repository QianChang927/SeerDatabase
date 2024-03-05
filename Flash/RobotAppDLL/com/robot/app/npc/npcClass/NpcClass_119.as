package com.robot.app.npc.npcClass
{
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class NpcClass_119
   {
       
      
      public function NpcClass_119()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHAWN,["小赛尔，这里是经过精心改建的发明室！有什么需要了解的，我会尽力帮助你哦！"],["超能NoNo有什么特权？","开通超能NoNo！","到处逛逛"],[function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("NonoVipPanel"),"正在打开超能NoNo专区....",1);
         },function():void
         {
            LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
         }]);
      }
   }
}

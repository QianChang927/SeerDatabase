package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class DarkGodEnvoy_WhiteHawkController
   {
      
      private static var _inStory:Boolean = false;
       
      
      public function DarkGodEnvoy_WhiteHawkController()
      {
         super();
      }
      
      public static function initForMap() : void
      {
         if(!BufferRecordManager.getState(MainManager.actorInfo,659))
         {
            _inStory = true;
            KTool.hideMapPlayerAndMonster();
            NpcDialog.show(NPC.SEER,["天降异象 神兽异动！梦中神的启示真的存在吗？我是被他挑中的人选，这究竟是怎么回事，看来我有必要去调查一番！"],["主人...主人有新发现哦！"],[function():void
            {
               NpcDialog.show(NPC.SUPERNONO,["快...跟我来...保证让你大吃一惊！！！！"],["真的假的啊！"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("darkGodEnvoy_WhiteHawk_1"),function():void
                  {
                     if(ToolBarController.panel.panelIsShow)
                     {
                        KTool.showMapPlayerAndMonster();
                     }
                     MapManager.changeMap(92);
                  },false);
               }]);
            }]);
         }
         else
         {
            MapManager.changeMap(92);
         }
      }
      
      public static function initForMap92() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 13
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      public static function fightWithWhiteHawk(param1:uint) : void
      {
         var _loc2_:uint = 0;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         PetFightModel.mode = PetFightModel.SINGLE_MODE;
         FightManager.fightWithBoss("白鹰",param1 + _loc2_);
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         PetFightModel.mode = PetFightModel.MULTI_MODE;
         ModuleManager.showModule(ClientConfig.getAppModule("darkGodEnvoy/DarkGodEnvoy_WhiteHawkMainPanel"));
      }
   }
}

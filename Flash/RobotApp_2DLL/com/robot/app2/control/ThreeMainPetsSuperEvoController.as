package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskQuneProcessor;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.loading.Loading;
   import flash.display.MovieClip;
   import flash.events.Event;
   import org.taomee.utils.DisplayUtil;
   
   public class ThreeMainPetsSuperEvoController
   {
       
      
      public function ThreeMainPetsSuperEvoController()
      {
         super();
      }
      
      public static function playMovie() : void
      {
         var mcloader:MCLoader = null;
         SocketConnection.send(1022,86073817);
         mcloader = new MCLoader(ClientConfig.getMapAnimate("threemainpetsevo"),null,Loading.TITLE_AND_PERCENT,"剧情加载中..");
         mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
         {
            var mapMv:MovieClip = null;
            var d2:Array = null;
            var d3:Array = null;
            var d4:Array = null;
            var d5:Array = null;
            var e:* = param1;
            KTool.hideMapAllPlayerAndMonster();
            mapMv = mcloader.loader.content["mv"];
            mapMv.parent.removeChild(mapMv);
            d2 = [[NPC.CHIYANJINGANG,["多谢，小赛尔，在上次与元素法师的战斗中，是你帮助了我们完成了超进化，但是我的超进化能量还不够稳定，我们希望你再次伸出援手。"],["没有问题，包在我身上！"]]];
            d3 = [[NPC.MENGNALISHA,["好奇怪！这家伙是谁！"],["他看起来很眼熟！"]],[NPC.XIYEJUN,["哈哈！虽然我不知道为什么会穿越到这个地方，但是我可以告诉你们，我就是人见人爱！花见花开！车见车载的西野君！"],["难道是真的是西野君！"]],[NPC.XIYEJUN,["这不是大名鼎鼎的三主宠嘛！不久之前完成超进化的你们，最近又有什么提升了吗！"],["这个嘛……"]]];
            d4 = [[NPC.SIKAIER,["够了！停下！西野君确实是一位强大的对手！"],["他的确很强……"]],[NPC.XIYEJUN,["我投降……我投降……实在打不过了……"],["以一敌三确实不容易……"]],[NPC.SIKAIER,["元素三主宠，你们以三对一还没有占到绝对的优势，这说明你们的超进化力量还不够扎实！"],["师尊说的对，我们的确还不够强大……"]],[NPC.LUSIWANG,["西野君的实力确实脱俗，在刚才战斗中我已经体会到了他的强大。我们需要继续强化我们的超进化力量。"],["继续努力的训练超进化力量吧！三主宠！"]]];
            d5 = [[NPC.SIKAIER,["西野君正是一个这样强劲的对手，来帮助三主宠提升能力，加强超进化力量吧！"],["我们一起努力，加油！"]],[NPC.XIYEJUN,["没问题，帮助他人是我最喜欢的事情了，哈哈！"],["多谢西野君的相助，让我们开始吧！"]]];
            NpcDialog.show(NPC.CHIYANJINGANG,[MainManager.actorInfo.nick + "，卡修斯为了对抗天魔组织的万神之王——克罗诺斯终于完成了自己的超进化！成为了第三位拥有超进化形态的战神联盟！三主宠也不能落后，要加紧训练，增强自身的超进化力量以投身于对抗天魔组织的战斗中去！"],["是！我一定会帮助你们的！","等等，我先要去看看卡修斯超进化的庆典呢！"],[function():void
            {
               var taskQuePro:*;
               MapObjectControl.hideOrShowAllObjects(false);
               taskQuePro = new TaskQuneProcessor();
               taskQuePro.addMapMv(mapMv,1,"mv");
               taskQuePro.addDialog(d2);
               taskQuePro.addMapMv(mapMv,2,"mv");
               taskQuePro.addDialog(d3);
               taskQuePro.addMapMv(mapMv,3,"mv");
               taskQuePro.addDialog(d4);
               taskQuePro.addMapMv(mapMv,4,"mv");
               taskQuePro.addDialog(d5);
               taskQuePro.procesEndFun = function():void
               {
                  KTool.showMapAllPlayerAndMonster();
                  MapObjectControl.hideOrShowAllObjects(true);
                  BufferRecordManager.setMyState(1131,true);
                  mcloader.clear();
                  DisplayUtil.removeForParent(mapMv);
                  ToolBarController.showOrHideAllUser(ToolBarController.panel.panelIsShow);
                  ModuleManager.showModule(ClientConfig.getAppModule("ThreeMainPetsSuperEvoPanel"));
               };
               taskQuePro.start();
            },function():void
            {
               mcloader.clear();
               DisplayUtil.removeForParent(mapMv);
            }]);
         });
         mcloader.doLoad();
      }
      
      public static function get isTaskFinish() : Boolean
      {
         return BufferRecordManager.getMyState(1131);
      }
      
      public static function startFight() : void
      {
         SocketConnection.send(41129,1194);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
      }
      
      private static function fightOverHandler(param1:Event) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         ModuleManager.showModule(ClientConfig.getAppModule("ThreeMainPetsSuperEvoPanel"));
      }
   }
}

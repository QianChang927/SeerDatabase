package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_11329 extends BaseMapProcess
   {
      
      private static var _taskMc:MovieClip;
       
      
      public function MapProcess_11329()
      {
         taskMc;
         super();
      }
      
      private static function chooseDialog() : void
      {
         NpcDialog.show(NPC.SITAAO,["请问，你有没有看到过一块特殊的石头？"],["那是我的玩具，我不会给你的！"],[function():void
         {
            NpcDialog.show(NPC.SEER,["小妹妹，那块石头很重要，我们可以帮你找更好玩的玩具……"],["我就要这块石头，你们好烦，接招！"],[function():void
            {
               FightManager.tryFight(444,[0,0,0,0],function():void
               {
                  if(FightManager.isWin)
                  {
                     Alarm2.show("已获得裂空星灵石！",function():void
                     {
                        DisplayUtil.removeForParent(taskMc);
                        ModuleManager.showModule(ClientConfig.getAppModule("ResurrectionStarKingWulingGetItemPanel"));
                     });
                  }
               });
            }]);
         }]);
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      override protected function init() : void
      {
         this.startPlay();
         super.init();
      }
      
      public function startPlay() : void
      {
         this.topLevel.mouseEnabled = false;
         this.topLevel.mouseChildren = false;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_resurrectionStarKingWuling"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            taskMc = mc;
            taskMc.gotoAndStop(6);
            conLevel.addChild(taskMc);
            KTool.getMultiValue([4383],function(param1:Array):void
            {
               if(BitUtils.getBit(param1[0],3) > 0)
               {
                  CommonUI.removeYellowArrow(taskMc.btn_0);
               }
               else
               {
                  CommonUI.addYellowArrow(taskMc.btn_0,taskMc.btn_0.width + 20,-10,45);
               }
            });
            taskMc.btn_0.buttonMode = true;
            addEvents();
         });
      }
      
      private function addEvents() : void
      {
         taskMc.addEventListener(MouseEvent.CLICK,this.onDialog);
      }
      
      private function removeEvents() : void
      {
         taskMc.removeEventListener(MouseEvent.CLICK,this.onDialog);
      }
      
      private function onDialog(param1:MouseEvent) : void
      {
         var _loc2_:String = param1.target.name as String;
         switch(_loc2_)
         {
            case "btn_0":
               chooseDialog();
         }
      }
      
      override public function destroy() : void
      {
         DisplayUtil.removeForParent(taskMc);
         CommonUI.removeYellowArrow(taskMc.btn_0);
         this.removeEvents();
         super.destroy();
      }
   }
}

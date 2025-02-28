package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
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
   
   public class MapProcess_11330 extends BaseMapProcess
   {
      
      private static var _taskMc:MovieClip;
       
      
      public function MapProcess_11330()
      {
         taskMc;
         super();
      }
      
      private static function startPreTask(param1:int) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var index:int = param1;
         CommonUI.removeYellowArrow(taskMc.btn_0);
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,index,"mc" + index]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            LevelManager.iconLevel.visible = true;
            ToolBarController.panel.visible = true;
            chooseDialog();
         };
         storyPlayer.start();
      }
      
      private static function chooseDialog() : void
      {
         NpcDialog.show(NPC.DI_WEI_LA,["啊啊啊！有人来抢石头啦！大家快上啊！"],["准备战斗！"],[function():void
         {
            FightManager.tryFight(445,[0,0,0,0],function():void
            {
               if(FightManager.isWin)
               {
                  Alarm2.show("已获得螺旋星灵石！",function():void
                  {
                     DisplayUtil.removeForParent(taskMc);
                     ModuleManager.showModule(ClientConfig.getAppModule("ResurrectionStarKingWulingGetItemPanel"));
                  });
               }
            });
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
            taskMc.gotoAndStop(7);
            conLevel.addChild(taskMc);
            KTool.getMultiValue([4383],function(param1:Array):void
            {
               if(BitUtils.getBit(param1[0],4) > 0)
               {
                  CommonUI.removeYellowArrow(taskMc.btn_0);
               }
               else
               {
                  CommonUI.addYellowArrow(taskMc.btn_0,taskMc.btn_0.width + 10,-10,45);
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
               startPreTask(7);
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

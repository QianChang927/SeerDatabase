package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import flash.display.MovieClip;
   import flash.events.DataEvent;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_11323 extends BaseMapProcess
   {
       
      
      private var _taskMc:MovieClip;
      
      private var overNum:int;
      
      public function MapProcess_11323()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.getNum();
         ModuleManager.addEventListener(ModuleManager.MODEL_CLOSE,this.onCloseModule);
         ResourceManager.getResource(ClientConfig.getMapAnimate("CelebrationOpeningAnmiate"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            _taskMc = mc;
            conLevel.addChild(_taskMc);
            if(!BitBuffSetClass.getState(23245))
            {
               StatManager.sendStat2014("0826开学庆典大动员","触发运石头场景动画","2016运营活动");
               KTool.hideMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(false);
               LevelManager.iconLevel.visible = false;
               AnimateManager.playMcAnimate(_taskMc,1,"mc",function():void
               {
                  BitBuffSetClass.setState(23245,1);
                  KTool.showMapAllPlayerAndMonster();
                  MapObjectControl.hideOrShowAllObjects(true);
                  LevelManager.iconLevel.visible = true;
                  initMap();
               });
            }
            else
            {
               initMap();
            }
         });
      }
      
      private function initMap() : void
      {
         this._taskMc.gotoAndStop(1);
         this._taskMc.mc.gotoAndStop(this._taskMc.mc.totalFrames);
         MapListenerManager.add(this._taskMc.mc["npcBtn"],function(param1:MouseEvent):void
         {
            var e:MouseEvent = param1;
            NpcDialog.show(NPC.SEER,["据金笔书圣所说，想要建成雕像共需要5份石料。现在我已经运送过" + overNum + "份了。"],["开始运送石料","我再休息一会"],[function():void
            {
               StatManager.sendStat2014("0826开学庆典大动员","进入小游戏","2016运营活动");
               ModuleManager.showAppModule("CelebrationOpeningGamePanel");
            }]);
         });
      }
      
      private function onCloseModule(param1:DataEvent) : void
      {
         if(param1.data.indexOf("CelebrationOpeningGamePanel") > -1)
         {
            this.getNum();
         }
      }
      
      private function getNum() : void
      {
         KTool.getMultiValue([4380],function(param1:Array):void
         {
            var val:Array = param1;
            overNum = val[0];
            if(overNum >= 5)
            {
               Alarm2.show("恭喜你已经完成了所有石料的运送任务！",function():void
               {
                  KTool.changeMapWithCallBack(11322,function():void
                  {
                     ModuleManager.showAppModule("CelebrationOpeningMainPanel");
                  });
               });
            }
         });
      }
      
      override public function destroy() : void
      {
         DisplayUtil.removeForParent(this._taskMc);
         this._taskMc = null;
         ModuleManager.removeListener(ModuleManager.MODEL_CLOSE,this.onCloseModule);
         super.destroy();
      }
   }
}

package com.robot.app.mapProcess
{
   import com.robot.app.ogre.OgreController;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.effect.LightEffect;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.MapStoryManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.PetModel;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.clearTimeout;
   import flash.utils.getDefinitionByName;
   import flash.utils.setTimeout;
   
   public class MapProcess_36 extends BaseMapProcess
   {
       
      
      private var count:uint = 0;
      
      private var isWellOpen:* = false;
      
      public function MapProcess_36()
      {
         super();
      }
      
      override protected function init() : void
      {
         getDefinitionByName("com.robot.app2.mapProcess.control.ASignalThatNeverDisappearsController").initMap36(this);
         OgreController.isShow = false;
         var _loc1_:uint = 0;
         while(_loc1_ < 4)
         {
            conLevel["pillar_" + _loc1_].gotoAndStop(1);
            _loc1_++;
         }
         animatorLevel["lightMC"].gotoAndStop(1);
         animatorLevel["wellDoor"].visible = false;
         conLevel["btnWell"].visible = false;
         conLevel["btnWell"].addEventListener(MouseEvent.CLICK,this.onClickWell);
      }
      
      override public function destroy() : void
      {
         conLevel["btnWell"].removeEventListener(MouseEvent.CLICK,this.onClickWell);
         getDefinitionByName("com.robot.app2.mapProcess.control.ASignalThatNeverDisappearsController").destroyMap36();
         OgreController.isShow = true;
      }
      
      protected function onClickWell(param1:*) : void
      {
         var e:* = param1;
         if(this.isWellOpen)
         {
            MapStoryManager.playerMoveToMc(conLevel["btnWell"],function():void
            {
               MapManager.changeMap(1717);
            });
         }
      }
      
      public function hitPillar(param1:MovieClip) : void
      {
         var effect:LightEffect;
         var t:uint = 0;
         var id:uint = 0;
         var mc:MovieClip = param1;
         var model:PetModel = MainManager.actorModel.pet;
         var b:Boolean = true;
         if(!model)
         {
            b = false;
         }
         else
         {
            id = uint(model.info.petID);
            if(PetXMLInfo.getType(id) != "5")
            {
               b = false;
            }
         }
         if(!b)
         {
            Alarm.show("这根柱子缺少启动电能，带上<font color=\'#ff0000\'>电系精灵</font>或许能激活它。");
            return;
         }
         mc.mouseEnabled = false;
         ++this.count;
         model.stop();
         effect = new LightEffect();
         effect.show(new Point(model.x,model.y - model.height + 2),new Point(mc.x + mc.width / 2,mc.y + mc.height - 5),false);
         t = setTimeout(function():void
         {
            clearTimeout(t);
            mc.gotoAndStop(2);
         },1000);
         if(this.count >= 4)
         {
            this.isWellOpen = true;
            animatorLevel["wellDoor"].visible = true;
            conLevel["btnWell"].visible = true;
            OgreController.isShow = true;
            getDefinitionByName("com.robot.app2.mapProcess.control.ASignalThatNeverDisappearsController").onMap36PillarAllLight();
         }
      }
   }
}

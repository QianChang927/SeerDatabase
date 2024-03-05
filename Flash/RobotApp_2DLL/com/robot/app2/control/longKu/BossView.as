package com.robot.app2.control.longKu
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.manager.MapManager;
   import com.robot.core.utils.SolidDir;
   import flash.display.Bitmap;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class BossView extends Sprite
   {
       
      
      private var _bg:MovieClip;
      
      private var _bossContainer:MovieClip;
      
      private var _bmp:Bitmap;
      
      public function BossView()
      {
         super();
         this._bg = MapManager.currentMap.controlLevel["boss_bg"];
         addChild(this._bg);
         this._bossContainer = this._bg["bossContainer"];
         this._bg.removeChild(this._bossContainer);
         this._bossContainer.addEventListener(MouseEvent.CLICK,this.onBossClick);
         this._bossContainer.buttonMode = true;
         if(GameLongkuControl.currentStage <= GameLongkuControl.stepTwoIndex)
         {
            this._bg.removeChild(this._bg["item"]);
         }
         this.tip.visible = false;
      }
      
      private function onBossClick(param1:MouseEvent) : void
      {
         GameLongkuControl.fight();
      }
      
      public function hideBoss() : void
      {
         if(this._bossContainer.parent)
         {
            DisplayUtil.removeForParent(this._bossContainer);
         }
      }
      
      public function showBoss() : void
      {
         var frame:int = 0;
         frame = 2;
         if(GameLongkuControl.currentStage <= GameLongkuControl.stepTwoIndex)
         {
            frame = 1;
         }
         if(GameLongkuControl.lastBossIndex == GameLongkuControl.currentStage)
         {
            this._bg.addChild(this._bossContainer);
            AnimateManager.playMcAnimate(this._bossContainer["mv"],frame,"mv",function():void
            {
               _bossContainer.gotoAndStop(2);
            });
            return;
         }
         ToolTipManager.add(this._bossContainer,PetXMLInfo.getName(GameLongkuControl.petId));
         ResourceManager.getResource(ClientConfig.getPetSwfPath(GameLongkuControl.petId),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            mc.scaleX = mc.scaleY = 1.8;
            mc.gotoAndStop(SolidDir.DIR_TOP);
            _bg.addChild(_bossContainer);
            mc.y = 0;
            AnimateManager.playMcAnimate(_bossContainer["mv"],frame,"mv",function():void
            {
               var frame:int;
               var tip:MovieClip = null;
               _bossContainer.addChild(mc);
               tip = _bossContainer["tip"];
               _bossContainer.addChild(tip);
               frame = int(KTool.getRandom([1,2,3,4,5,6,7,8],1)[0]);
               tip.gotoAndStop(frame);
               tip.visible = true;
               setTimeout(function():void
               {
                  tip.visible = false;
               },3000);
            });
         },"pet");
      }
      
      public function destory() : void
      {
         if(this._bossContainer)
         {
            ToolTipManager.remove(this._bossContainer);
            this._bossContainer.removeEventListener(MouseEvent.CLICK,this.onBossClick);
         }
         this._bg = null;
         this._bossContainer = null;
         if(this._bmp)
         {
            this._bmp.bitmapData.dispose();
            this._bmp = null;
         }
         DisplayUtil.removeForParent(this);
      }
      
      public function showLose(param1:Function) : void
      {
         var frame:int;
         var t:uint = 0;
         var fun:Function = param1;
         this.tip.visible = true;
         frame = int(KTool.getRandom([9,10,11],1)[0]);
         this.tip.gotoAndStop(frame);
         t = setTimeout(function():void
         {
            clearTimeout(t);
            fun();
         },3000);
      }
      
      private function get tip() : MovieClip
      {
         if(this._bossContainer)
         {
            return this._bossContainer["tip"];
         }
         return null;
      }
   }
}

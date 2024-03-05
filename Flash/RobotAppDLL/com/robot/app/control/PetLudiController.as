package com.robot.app.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.newloader.MCLoader;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.utils.DisplayUtil;
   
   public class PetLudiController
   {
      
      private static var _mc:MovieClip;
      
      private static var _model:BaseMapProcess;
      
      private static var _timer:uint = 1;
      
      private static var _loader:MCLoader;
      
      private static var _aiMc:MovieClip;
       
      
      public function PetLudiController()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _model = param1;
         _mc = _model.conLevel["aimatMc"];
         _model.conLevel["aimatHitMc"].alpha = 0;
         _model.conLevel["aimatHitMc"].mouseEnabled = false;
         _model.conLevel["aimatHitMc"].mouseChildren = false;
         var _loc2_:Date = SystemTimerManager.sysDate;
         if(_loc2_.getHours() >= 18 && _loc2_.getHours() <= 20)
         {
            initApp();
         }
         else
         {
            destroy();
         }
      }
      
      private static function initApp() : void
      {
         getMc(_mc,"mc1",function():void
         {
            _mc["mc1"].gotoAndPlay(2);
         });
         _mc.addEventListener(MouseEvent.CLICK,onClickPetHandler);
         _mc.buttonMode = true;
         _model.conLevel["wMc_1"].addEventListener(MouseEvent.CLICK,onWClickHandler);
         _model.conLevel["wMc_1"].buttonMode = true;
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,onWalkEnterFrame);
      }
      
      private static function onWalkEnterFrame(param1:RobotEvent) : void
      {
         var _loc2_:Sprite = _model.conLevel["aimatHitMc"];
         var _loc3_:Point = MainManager.actorModel.pos;
         if(_loc2_.hitTestPoint(_loc3_.x,_loc3_.y))
         {
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onWalkEnterFrame);
            if(_mc.currentFrame == 1)
            {
               _mc.gotoAndStop(2);
            }
         }
      }
      
      private static function onClickPetOneHandler(param1:MouseEvent) : void
      {
      }
      
      private static function onWClickHandler(param1:MouseEvent) : void
      {
         var mc:MovieClip = null;
         var e:MouseEvent = param1;
         ++_timer;
         mc = e.currentTarget as MovieClip;
         mc.removeEventListener(MouseEvent.CLICK,onWClickHandler);
         mc.buttonMode = false;
         mc.gotoAndStop(2);
         getMc(mc,"mc",function():void
         {
            mc["mc"].addEventListener(Event.ENTER_FRAME,function(param1:Event):void
            {
               if(mc["mc"].currentFrame == mc["mc"].totalFrames)
               {
                  mc["mc"].removeEventListener(Event.ENTER_FRAME,arguments.callee);
                  mc["mc"].gotoAndStop(1);
                  DisplayUtil.removeForParent(mc);
                  if(_timer <= 3)
                  {
                     _model.conLevel["wMc_" + _timer].addEventListener(MouseEvent.CLICK,onWClickHandler);
                     _model.conLevel["wMc_" + _timer].buttonMode = true;
                     _mc.gotoAndStop(_timer + 1);
                  }
                  else
                  {
                     _mc.gotoAndStop(5);
                  }
               }
            });
         });
      }
      
      private static function onClickPetHandler(param1:MouseEvent) : void
      {
         if(_mc.currentFrame == 1)
         {
            return;
         }
         if(_mc.currentFrame == 2)
         {
            loadAimat();
         }
         if(_mc.currentFrame == 5)
         {
            FightManager.fightWithBoss("鲁迪",0,true);
         }
      }
      
      private static function getMc(param1:MovieClip, param2:String, param3:Function = null) : void
      {
         var mc:MovieClip = param1;
         var nameStr:String = param2;
         var func:Function = param3;
         mc.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
         {
            if(mc[nameStr])
            {
               mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               if(func != null)
               {
                  func();
               }
            }
         });
      }
      
      private static function loadAimat() : void
      {
         _loader = new MCLoader(ClientConfig.getFullMovie("ludiEscape"),LevelManager.appLevel,1,"正在进入对战");
         _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadComHandler);
         _loader.doLoad();
      }
      
      private static function onLoadComHandler(param1:MCLoadEvent) : void
      {
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadComHandler);
         var _loc2_:MovieClip = param1.getContent() as MovieClip;
         _aiMc = _loc2_.getChildAt(0) as MovieClip;
         LevelManager.appLevel.addChild(_aiMc);
         _aiMc.addFrameScript(_aiMc.totalFrames - 1,onPlayEndHandler);
      }
      
      private static function onPlayEndHandler() : void
      {
         _aiMc.addFrameScript(_aiMc.totalFrames - 1,null);
         DisplayUtil.removeForParent(_aiMc);
         _aiMc = null;
      }
      
      public static function destroy() : void
      {
         var _loc1_:int = 0;
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,onWalkEnterFrame);
         if(_mc)
         {
            _mc.removeEventListener(MouseEvent.CLICK,onClickPetHandler);
            DisplayUtil.removeForParent(_mc);
         }
         if(_model)
         {
            _loc1_ = 1;
            while(_loc1_ < 4)
            {
               _model.conLevel["wMc_" + _loc1_].removeEventListener(MouseEvent.CLICK,onWClickHandler);
               DisplayUtil.removeForParent(_model.conLevel["wMc_" + _loc1_]);
               _model.conLevel["wMc_" + _loc1_] = null;
               _loc1_++;
            }
            _model = null;
         }
         if(_loader)
         {
            _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadComHandler);
            _loader.clear();
            _loader = null;
         }
         if(_aiMc)
         {
            onPlayEndHandler();
         }
         _timer = 1;
      }
   }
}

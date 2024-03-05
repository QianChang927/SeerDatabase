package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.text.TextField;
   import flash.text.TextFieldAutoSize;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class LookForFormerPetsFightController
   {
      
      private static var _pets:Array;
      
      private static var _map:BaseMapProcess;
      
      private static const BOSS:Array = [56,454,348];
      
      private static const NAME:Array = ["奇洛","霹雳兽","小犬苗"];
      
      private static const POS:Array = [new Point(460,430),new Point(360,410),new Point(610,410)];
       
      
      public function LookForFormerPetsFightController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         _pets = new Array(3);
         var _loc2_:int = 0;
         while(_loc2_ < 3)
         {
            addBoss(_loc2_);
            _loc2_++;
         }
      }
      
      public static function destroy() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < 3)
         {
            DisplayUtil.removeForParent(_pets[_loc1_]);
            _pets[_loc1_] = null;
            _loc1_++;
         }
         _pets = null;
         _map = null;
      }
      
      private static function addBoss(param1:int) : void
      {
         var index:int = param1;
         ResourceManager.getResource(ClientConfig.getPetFightPath(BOSS[index]),function(param1:MovieClip):void
         {
            param1.gotoAndStop(1);
            param1.x = POS[index].x;
            param1.y = POS[index].y;
            param1.scaleX = param1.scaleY = 0.3;
            param1.name = "pet" + index;
            param1.buttonMode = true;
            param1.addEventListener(MouseEvent.CLICK,onFight);
            _map.conLevel.addChild(param1);
            _pets[index] = param1;
            var _loc2_:TextField = new TextField();
            _loc2_.text = NAME[index];
            _loc2_.autoSize = TextFieldAutoSize.CENTER;
            _loc2_.x = param1.x - _loc2_.width / 2;
            _loc2_.y = param1.y + param1.height;
            _map.conLevel.addChild(_loc2_);
         },"pet");
      }
      
      private static function onFight(param1:MouseEvent) : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightWin);
         FightDispatcher.addEventListener(PetFightEvent.CATCH_SUCCESS,onCatchSuccess);
         var _loc2_:int = int(param1.currentTarget.name.replace("pet",""));
         FightManager.fightWithBoss(NAME[_loc2_],_loc2_);
      }
      
      private static function onFightWin(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightWin);
         FightDispatcher.removeEventListener(PetFightEvent.CATCH_SUCCESS,onCatchSuccess);
      }
      
      private static function onCatchSuccess(param1:DynamicEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightWin);
         FightDispatcher.removeEventListener(PetFightEvent.CATCH_SUCCESS,onCatchSuccess);
      }
   }
}

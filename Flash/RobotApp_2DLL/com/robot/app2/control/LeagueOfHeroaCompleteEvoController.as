package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import gs.TweenLite;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class LeagueOfHeroaCompleteEvoController
   {
      
      private static const _petIdArr:Array = [1845,2341,2527,2323,2394];
      
      private static var _leiyi:Boolean = false;
      
      private static var _gaiya:Boolean = false;
      
      private static var _black:Boolean = false;
      
      private static var _caxius:Boolean = false;
      
      private static var _miuse:Boolean = false;
       
      
      public function LeagueOfHeroaCompleteEvoController()
      {
         super();
      }
      
      public static function checkBitForTips(param1:Function) : void
      {
         var fun:Function = param1;
         PetManager.checkMultiPet(_petIdArr,function(param1:Array):void
         {
            var _loc2_:Boolean = true;
            var _loc3_:int = 0;
            while(_loc3_ < param1.length)
            {
               if(!param1[_loc3_])
               {
                  _loc2_ = false;
               }
               _loc3_++;
            }
            _gaiya = param1[0];
            _black = param1[1];
            _miuse = param1[2];
            _caxius = param1[3];
            _leiyi = param1[4];
            if(fun != null)
            {
               fun(_loc2_);
            }
         });
      }
      
      public static function showLoginPanel() : void
      {
         ModuleManager.showAppModule("LeagueOfHeroSuperEvoLoginPanel");
      }
      
      public static function showMsg() : void
      {
         ResourceManager.getResource(ClientConfig.getActiveUrl("LeagueOfHeroSuperEvoMsg"),function(param1:MovieClip):void
         {
            param1.addEventListener(MouseEvent.CLICK,onClick);
            param1.x = 645;
            param1.y = 560;
            TweenLite.to(param1,2,{"y":360});
            LevelManager.iconLevel.addChild(param1);
         });
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var mc:MovieClip = null;
         var event:MouseEvent = param1;
         var str:String = String(event.target.name);
         if(str == "close")
         {
            mc = event.target.parent;
            mc.removeEventListener(MouseEvent.CLICK,onClick);
            mc.visible = false;
            DisplayUtil.removeForParent(mc as DisplayObject);
         }
         else if(str == "goBtn")
         {
            Alarm.show("只有全部获得了战神联盟超进化形态的赛尔才能在战神联盟完全体活动中获得难度降低的特权哦！",function():void
            {
               ModuleManager.showAppModule("AllianceMainPanel");
               mc = event.target.parent;
               mc.removeEventListener(MouseEvent.CLICK,onClick);
               mc.visible = false;
               DisplayUtil.removeForParent(mc as DisplayObject);
            });
         }
      }
      
      public static function get leiyi() : Boolean
      {
         return _leiyi;
      }
      
      public static function get gaiya() : Boolean
      {
         return _gaiya;
      }
      
      public static function get black() : Boolean
      {
         return _black;
      }
      
      public static function get caxius() : Boolean
      {
         return _caxius;
      }
      
      public static function get miuse() : Boolean
      {
         return _miuse;
      }
   }
}

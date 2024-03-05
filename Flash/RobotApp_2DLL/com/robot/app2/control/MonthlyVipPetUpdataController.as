package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.VipMonthMonsterXMLInfo;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MonthlyVipPetUpdataController
   {
      
      private static var _assetForSeerSub1:MovieClip;
      
      private static var _assetForSeerSub3:MovieClip;
      
      private static var _backAssete:MovieClip;
       
      
      public function MonthlyVipPetUpdataController()
      {
         super();
      }
      
      public static function getBackAssete() : MovieClip
      {
         return _backAssete;
      }
      
      public static function loadBackVipContent(param1:MovieClip, param2:Function = null) : void
      {
         var parent:MovieClip = param1;
         var func:Function = param2;
         ResourceManager.getResource(ClientConfig.getAppResource(VipMonthMonsterXMLInfo.getBackVipAssete()),function(param1:MovieClip):void
         {
            _backAssete = param1;
            _backAssete.x = _backAssete.y = 0;
            parent.addChild(_backAssete);
            if(func != null)
            {
               func();
            }
         });
      }
      
      public static function getSeerVipSub3Content(param1:MovieClip) : void
      {
         var parent:MovieClip = param1;
         if(_assetForSeerSub1 != null)
         {
            _assetForSeerSub3.x = _assetForSeerSub3.y = 0;
            parent.addChild(_assetForSeerSub3);
         }
         else
         {
            loadSeerVipSubContent(function():void
            {
               _assetForSeerSub3.x = _assetForSeerSub3.y = 0;
               parent.addChild(_assetForSeerSub3);
            });
         }
      }
      
      public static function getSeerVipSub1Content(param1:MovieClip) : MovieClip
      {
         var parent:MovieClip = param1;
         if(_assetForSeerSub1 != null)
         {
            _assetForSeerSub1.x = _assetForSeerSub1.y = 0;
            parent.addChild(_assetForSeerSub1);
            return _assetForSeerSub1;
         }
         loadSeerVipSubContent(function():void
         {
            _assetForSeerSub1.x = _assetForSeerSub1.y = 0;
            parent.addChild(_assetForSeerSub1);
         });
         return null;
      }
      
      public static function loadSeerVipSubContent(param1:Function = null) : void
      {
         var func:Function = param1;
         ResourceManager.getResource(ClientConfig.getAppResource(VipMonthMonsterXMLInfo.getSeerVipSubAssete()),function(param1:MovieClip):void
         {
            _assetForSeerSub1 = param1.sub1 as MovieClip;
            _assetForSeerSub3 = param1.sub3 as MovieClip;
            if(func != null)
            {
               func();
            }
         });
      }
      
      public static function detroy() : void
      {
         DisplayUtil.removeForParent(_assetForSeerSub1);
         _assetForSeerSub1 = null;
         DisplayUtil.removeForParent(_assetForSeerSub3);
         _assetForSeerSub3 = null;
         DisplayUtil.removeForParent(_backAssete);
         _backAssete = null;
      }
   }
}

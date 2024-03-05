package com.robot.core.ui.itemTip
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.manager.LevelManager;
   import flash.display.MovieClip;
   import flash.geom.Point;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class PetTip
   {
      
      public static const TYPE_ARR:Array = ["体力","攻击","防御","特攻","特防","速度"];
      
      private static var _ui:MovieClip;
      
      private static var _petID:uint;
       
      
      public function PetTip()
      {
         super();
      }
      
      public static function init(param1:Function = null) : void
      {
         var fun:Function = param1;
         ResourceManager.getResource(ClientConfig.getActiveUrl("pettip"),function(param1:MovieClip):void
         {
            _ui = param1;
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      public static function show(param1:int, param2:Point) : void
      {
         _petID = param1;
         _ui.x = param2.x;
         _ui.y = param2.y;
         LevelManager.tipLevel.addChild(_ui);
         buildUniversal();
      }
      
      private static function buildUniversal() : void
      {
         var _loc3_:int = 0;
         _ui["petName"].text = PetXMLInfo.getName(_petID);
         _ui["type"].text = PetXMLInfo.getTypeCN(_petID);
         var _loc1_:Array = PetXMLInfo.getAllEvById(_petID);
         var _loc2_:uint = _loc1_[0] + _loc1_[1] + _loc1_[2] + _loc1_[3] + _loc1_[4] + _loc1_[5];
         _loc3_ = 0;
         while(_loc3_ < 6)
         {
            _ui["attr_" + _loc3_].text = TYPE_ARR[_loc3_] + "：" + _loc1_[_loc3_];
            _loc3_++;
         }
         _ui["value"].text = _loc2_.toString();
      }
      
      public static function hide() : void
      {
         DisplayUtil.removeForParent(_ui);
      }
      
      public static function destroy() : void
      {
         _ui = null;
      }
   }
}

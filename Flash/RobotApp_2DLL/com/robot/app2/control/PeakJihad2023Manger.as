package com.robot.app2.control
{
   import com.robot.app.bag.BagClothPreview;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.info.UserInfo;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.skeleton.ClothPreview;
   import com.robot.core.ui.BlackBgTip;
   import com.robot.core.ui.itemTip.ItemInfoTip;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.utils.DisplayUtil;
   
   public class PeakJihad2023Manger
   {
       
      
      public function PeakJihad2023Manger()
      {
         super();
      }
      
      public static function getlvBigIcon(param1:int, param2:MovieClip, param3:int = 0, param4:Point = null) : void
      {
         DisplayUtil.removeAllChild(param2);
         var _loc5_:DisplayObject = KTool.getIcon(ClientConfig.getPeakJihadLvBigIcon(param1),param3 > 0 ? param3 : 150,!!param4 ? param4 : new Point(0,0));
         param2.addChild(_loc5_);
      }
      
      public static function getTypeIcon(param1:int, param2:MovieClip) : void
      {
         DisplayUtil.removeAllChild(param2);
         var _loc3_:SimpleButton = UIManager.getButton("Icon_PetType_" + param1);
         _loc3_.scaleX = _loc3_.scaleY = 0.8;
         param2.addChild(_loc3_);
      }
      
      public static function getHdeadIcon(param1:int, param2:MovieClip, param3:int = 0, param4:Point = null) : void
      {
         DisplayUtil.removeAllChild(param2);
         var _loc5_:DisplayObject = KTool.getIcon(ClientConfig.getPetHeadPath(param1),param3 > 0 ? param3 : 100,!!param4 ? param4 : new Point(0,0));
         param2.addChild(_loc5_);
      }
      
      public static function getAchieveIcon(param1:int, param2:MovieClip, param3:int = 0, param4:Point = null) : void
      {
         DisplayUtil.removeAllChild(param2);
         var _loc5_:String = String(ClientConfig.getResPath("achieve/icon/" + param1 + ".swf"));
         var _loc6_:DisplayObject = KTool.getIcon(_loc5_,param3 > 0 ? param3 : 100,!!param4 ? param4 : new Point(0,0));
         param2.addChild(_loc6_);
      }
      
      public static function addItemTips(param1:int, param2:*) : void
      {
         param2.itemID = param1;
         param2.addEventListener(MouseEvent.ROLL_OVER,onOverHandler);
         param2.addEventListener(MouseEvent.ROLL_OUT,onOutHandler);
      }
      
      public static function removeItemTips(param1:*) : void
      {
         param1.removeEventListener(MouseEvent.ROLL_OVER,onOverHandler);
         param1.removeEventListener(MouseEvent.ROLL_OUT,onOverHandler);
      }
      
      private static function onOverHandler(param1:MouseEvent) : void
      {
         var _loc3_:* = null;
         var _loc4_:Array = null;
         var _loc5_:Array = null;
         var _loc6_:int = 0;
         var _loc7_:SingleItemInfo = null;
         var _loc2_:int = int(param1.target.itemID);
         if(param1.target.itemID == null || _loc2_ == 0)
         {
            return;
         }
         if(CountermarkXMLInfo.getType(_loc2_) != -1)
         {
            _loc3_ = "名称：<font color=\'#ffff00\'>" + CountermarkXMLInfo.getDes(_loc2_) + "</font>" + "\r" + "效果：<font color=\'#ffff00\'>" + CountermarkXMLInfo.getEffectDes(_loc2_) + "</font>";
            if(_loc4_ = CountermarkXMLInfo.getExtraAttriValue(_loc2_))
            {
               _loc3_ += "\r" + "隐藏属性：<font color=\'#ffff00\'>";
               _loc5_ = ["攻击","防御","特攻","特防","速度","体力"];
               _loc6_ = 0;
               while(_loc6_ < 6)
               {
                  if(_loc4_[_loc6_] > 0)
                  {
                     _loc3_ += "+" + _loc4_[_loc6_] + _loc5_[_loc6_];
                  }
                  _loc6_++;
               }
               _loc3_ += "</font>";
            }
            _loc3_ += "\r" + "类型：<font color=\'#ffff00\'>" + CountermarkXMLInfo.getTypeName(_loc2_) + "</font>" + "\r" + "限定：<font color=\'#ffff00\'>" + CountermarkXMLInfo.getRestrictDes(_loc2_) + "</font>";
            BlackBgTip.show(_loc3_,null,null,150);
         }
         else
         {
            (_loc7_ = new SingleItemInfo()).itemID = _loc2_;
            ItemInfoTip.show(_loc7_,false,MainManager.getStage());
         }
      }
      
      private static function onOutHandler(param1:MouseEvent) : void
      {
         ItemInfoTip.hide();
         BlackBgTip.hide();
      }
      
      public static function getItemIcon(param1:uint, param2:MovieClip, param3:int, param4:int = 0, param5:Boolean = true) : DisplayObject
      {
         var _loc6_:String = null;
         if(param2 == null)
         {
            return null;
         }
         if(param2.iconID != null && param2.type != null)
         {
            if(param1 == param2.iconID && param2.type == param4)
            {
               return null;
            }
         }
         DisplayUtil.removeAllChild(param2);
         if(param4 == 0)
         {
            if(param1 < 100000 && param1 > 9)
            {
               _loc6_ = String(ClientConfig.getResPath("countermark/icon/" + param1 + ".swf"));
            }
            else
            {
               _loc6_ = String(ItemXMLInfo.getIconURL(param1));
            }
         }
         if(param4 == 1)
         {
            _loc6_ = String(ItemXMLInfo.getIconURL(param1));
         }
         else if(param4 == 2)
         {
            _loc6_ = String(ClientConfig.getResPath("countermark/icon/" + param1 + ".swf"));
         }
         else if(param4 != 3)
         {
            if(param4 == 4)
            {
               _loc6_ = String(ClientConfig.getResPath("item/cloth/suitIcon/" + param1 + ".swf"));
            }
            else if(param4 == 6)
            {
               _loc6_ = String(ClientConfig.getResPath("pet/head/1400" + param1 + ".swf"));
            }
            else if(param4 == 10)
            {
               _loc6_ = String(ClientConfig.getResPath("achieve/icon/" + param1 + ".swf"));
            }
         }
         param2.iconID = param1;
         param2.type = param4;
         var _loc7_:DisplayObject = KTool.getIcon(_loc6_,param3,null,param4 == 10 ? "icon" : "item");
         param2.addChild(_loc7_);
         removeItemTips(param2);
         if(param5 && (param4 == 0 || param4 == 1 || param4 == 2 || param4 == 4))
         {
            addItemTips(param1,param2);
         }
         return _loc7_;
      }
      
      public static function initUserFace(param1:UserInfo, param2:MovieClip, param3:int = 0) : void
      {
         var _loc4_:Sprite = getFaceBg(param3);
         var _loc5_:BagClothPreview = new BagClothPreview(_loc4_,null,ClothPreview.MODEL_SHOW);
         DisplayUtil.removeAllChild(param2);
         param2.addChild(_loc4_);
         _loc5_.changeColor(param1.color);
         _loc5_.showCloths(param1.clothes);
         _loc5_.showDoodle(param1.texture);
      }
      
      public static function getFaceBg(param1:int = 0) : Sprite
      {
         var _loc3_:Number = NaN;
         var _loc2_:Sprite = UIManager.getSprite("ComposeMC");
         _loc2_.mouseEnabled = false;
         _loc2_.mouseChildren = false;
         if(param1 > 0)
         {
            _loc3_ = param1 / 178;
            _loc2_.scaleX = _loc2_.scaleY = _loc3_;
            _loc2_.x = 178 * (1 - _loc3_) / 2;
            _loc2_.y = -(188 * (1 - _loc3_) / 4);
            if(param1 == 100)
            {
               _loc2_.x -= 30;
               _loc2_.x = _loc2_.y + 30;
            }
         }
         DisplayUtil.stopAllMovieClip(_loc2_);
         return _loc2_;
      }
      
      public static function destroy() : void
      {
      }
   }
}

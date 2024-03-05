package com.robot.app2.control
{
   import com.robot.core.info.Broadcast2016Info;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.ui.itemTip.ItemInfoTip;
   import com.robot.core.zip.PreloadZipXMLController;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.events.TextEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.text.TextField;
   import flash.utils.Timer;
   import org.taomee.bean.BaseBean;
   import org.taomee.ds.HashMap;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class BroadCastXMLLoadController extends BaseBean
   {
      
      private static var _hash:HashMap;
      
      private static var _xmlList:XMLList;
      
      private static var _itemId:int;
      
      private static var _itemInfo:SingleItemInfo;
      
      private static var _ui:MovieClip;
      
      public static var _array:Array = [];
      
      private static var _timer:Timer;
      
      public static var _currentInfo:Broadcast2016Info;
      
      private static var _cd:Boolean = false;
      
      private static const splicArrs:Array = [["<a href=\'event:useId\'>{0}</a>","{1}","<a href=\'event:itemId\'>{2}</a>"],["<a href=\'event:useId\'>{0}</a>","{1}","<a href=\'event:mosterId\'>{2}</a>"],["<a href=\'event:useId\'>{0}</a>","{1}","{2}"],["<a href=\'event:useId\'>{0}</a>","{1}","{2}"],["<a href=\'event:useId\'>{0}</a>","{1}","{2}","{3}","{4}"],["<a href=\'event:teamId\'>{0}</a>","{1}","{2}"],["{0}","{1}"]];
      
      private static const regE:RegExp = /\{(.+?)\}+/g;
      
      private static const colorReg:RegExp = /#([0-9a-fA-F]{6})/;
      
      private static const fontStr:String = "<font color=\'#{0}\'>{1}</font>";
       
      
      public function BroadCastXMLLoadController()
      {
         super();
      }
      
      private static function onTimer(param1:TimerEvent) : void
      {
         if(_ui)
         {
            _ui["txt"].removeEventListener(TextEvent.LINK,onTxtLink);
            DisplayUtil.removeForParent(_ui);
            _ui = null;
         }
         _cd = false;
      }
      
      public static function showBroad(param1:int, param2:int, param3:Array) : void
      {
         if(!_ui)
         {
            _ui = UIManager.getMovieClip("ui_Broadcast_mc");
         }
         _ui["txt"].addEventListener(TextEvent.LINK,onTxtLink);
         _ui["txt"].htmlText = getHtmlMsg(param1,param2,param3);
         LevelManager.toolsLevel.addChild(resizeMc(_ui));
         if(param2 == 1)
         {
            _itemId = int(param3[2]);
            _itemInfo = ItemManager.getInfo(_itemId);
            if(_itemInfo == null)
            {
               _itemInfo = new SingleItemInfo();
               _itemInfo.itemID = _itemId;
            }
            (_ui["txt"] as TextField).addEventListener(MouseEvent.MOUSE_OVER,onFrame);
            (_ui["txt"] as TextField).addEventListener(MouseEvent.MOUSE_OUT,onOut);
         }
      }
      
      public static function getHtmlMsg(param1:int, param2:int, param3:Array) : String
      {
         var _loc4_:XML;
         if((_loc4_ = _hash.getValue(param1)) == null)
         {
            return "";
         }
         var _loc5_:String = String(_loc4_.@msg);
         var _loc6_:Array = [];
         var _loc7_:int = 0;
         while(_loc7_ < param3.length)
         {
            _loc6_.push(substitute(splicArrs[param2 - 1][_loc7_].toString(),param3.slice(0,_loc7_ + 1)));
            _loc7_++;
         }
         var _loc8_:Array = (_loc5_ = substitute(_loc5_,_loc6_)).split(colorReg);
         var _loc9_:RegExp = /^([0-9a-fA-F]{6})$/;
         var _loc10_:String = "";
         var _loc11_:Boolean = false;
         _loc7_ = 0;
         while(_loc7_ < _loc8_.length)
         {
            if((_loc8_[_loc7_] as String).search(_loc9_) > -1)
            {
               _loc11_ = true;
            }
            else if(!_loc11_)
            {
               if(_loc8_[_loc7_])
               {
                  _loc10_ += _loc8_[_loc7_];
               }
            }
            else
            {
               _loc11_ = false;
               _loc10_ += substitute(fontStr,[_loc8_[_loc7_ - 1],_loc8_[_loc7_]]);
            }
            _loc7_++;
         }
         return "<b>" + _loc10_ + "</b>";
      }
      
      public static function substitute(param1:String, param2:Array) : String
      {
         var _loc4_:Object = null;
         var _loc3_:int = regE.lastIndex;
         while(_loc4_ = regE.exec(param1))
         {
            param1 = param1.replace(_loc4_[0],param2[_loc4_[1]]);
            regE.lastIndex = 0;
         }
         return param1;
      }
      
      public static function getLinkURL(param1:int) : String
      {
         var _loc2_:XML = _hash.getValue(param1);
         if(_loc2_ == null)
         {
            return "";
         }
         return String(_loc2_.@goUrl);
      }
      
      private static function onTxtLink(param1:TextEvent) : void
      {
         switch(param1.text)
         {
            case "useId":
            case "nick":
            case "itemId":
               break;
            case "module":
               ModuleManager.showAppModule(getLinkURL(1));
               break;
            case "map":
         }
      }
      
      private static function onFrame(param1:MouseEvent) : void
      {
         var _loc2_:TextField = param1.currentTarget as TextField;
         var _loc3_:String = _loc2_.getTextFormat(_loc2_.getCharIndexAtPoint(_loc2_.mouseX,_loc2_.mouseY)).url;
         if(_loc3_ == "event:itemId")
         {
            ItemInfoTip.show(_itemInfo);
         }
      }
      
      private static function onOut(param1:MouseEvent) : void
      {
         ItemInfoTip.hide();
      }
      
      private static function resizeMc(param1:MovieClip) : MovieClip
      {
         param1["txt"].width = param1["txt"].textWidth;
         if(param1["bar"])
         {
            param1["bar"].width = param1["txt"].width + 54;
         }
         DisplayUtil.align(param1,null,AlignType.TOP_CENTER,new Point(0,60));
         return param1;
      }
      
      override public function start() : void
      {
         PreloadZipXMLController.getXML("broadcast.xml",this.config);
      }
      
      private function config(param1:*) : void
      {
         var _loc3_:XML = null;
         var _loc2_:XML = new XML(param1);
         _hash = new HashMap();
         _xmlList = _loc2_.descendants("Broadcast");
         for each(_loc3_ in _xmlList)
         {
            _hash.add(uint(_loc3_.@ID),_loc3_);
         }
         finish();
      }
   }
}

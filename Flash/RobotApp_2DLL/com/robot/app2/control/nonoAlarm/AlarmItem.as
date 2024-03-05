package com.robot.app2.control.nonoAlarm
{
   import com.robot.app.task.petstory.util.BtnClick;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.geom.Point;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class AlarmItem
   {
      
      public static const STATU_1:String = "1";
      
      public static const STATU_2:String = "2";
       
      
      public var key:String;
      
      public var btnClcik:BtnClick;
      
      public var addTime:Date;
      
      public var type:String;
      
      public var cTimes:Array;
      
      private var _statu:String;
      
      public var petId:int;
      
      public var iconUrl:String;
      
      public var name:String;
      
      protected var _icon:Sprite;
      
      private var _showText:String;
      
      public var xml:XML;
      
      public var index:int = 0;
      
      public function AlarmItem()
      {
         super();
      }
      
      public function get showText() : String
      {
         return this._showText;
      }
      
      public function checkStatu() : void
      {
      }
      
      public function get statu() : String
      {
         return this._statu;
      }
      
      public function set statu(param1:String) : void
      {
         this._statu = param1;
      }
      
      public function get icon() : Sprite
      {
         var url:String = null;
         if(this._icon == null)
         {
            this._icon = new Sprite();
            if(this.petId > 0)
            {
               ResourceManager.getResource(ClientConfig.getPetSwfPath(this.petId),function(param1:MovieClip):void
               {
                  param1.gotoAndStop("right");
                  CommonUI.equalScale(param1,122,105);
                  var _loc2_:DisplayObject = DisplayUtil.copyDisplayAsBmp(param1);
                  _icon.addChild(_loc2_);
                  CommonUI.centerAlign(_loc2_,_icon,new Point(0,0));
               },"pet");
            }
            else
            {
               url = String(ClientConfig.getAppRes("nonoalarm/" + this.iconUrl));
               ResourceManager.getResource(url,function(param1:MovieClip):void
               {
                  _icon.addChild(param1);
                  CommonUI.equalScale(param1,122,105);
                  CommonUI.centerAlign(param1,_icon,new Point(0,0));
               });
            }
         }
         return this._icon;
      }
      
      public function set showText(param1:String) : void
      {
         this._showText = param1;
      }
   }
}

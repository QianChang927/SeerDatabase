package com.robot.app.protectSys
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.Bitmap;
   import flash.display.Loader;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.text.TextFormatAlign;
   import flash.utils.ByteArray;
   import org.taomee.component.containers.HBox;
   import org.taomee.component.containers.VBox;
   import org.taomee.component.control.MLoadPane;
   import org.taomee.component.control.MText;
   import org.taomee.component.layout.FlowLayout;
   import org.taomee.debug.DebugTrace;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class KillPluginPanel extends Sprite
   {
      
      public static const WRONG:String = "wrong";
      
      public static const RIGHT:String = "right";
       
      
      private var bg:Sprite;
      
      private var mainBox:VBox;
      
      private var petBox:HBox;
      
      private var picCon:Sprite;
      
      private var DIR_TYPE:uint;
      
      private var STR_LIST:Array;
      
      private var _quetionId:int;
      
      private var _bytes:ByteArray;
      
      public function KillPluginPanel(param1:Object)
      {
         this.STR_LIST = ["正 面","反 面","左 面","右 面"];
         super();
         this._quetionId = int(param1.quetion);
         this._bytes = ByteArray(param1.bytes);
         this.petBox = new HBox(0);
         this.petBox.halign = FlowLayout.CENTER;
         this.petBox.valign = FlowLayout.MIDLLE;
         this.petBox.setSizeWH(500,170);
         this.bg = UIManager.getSprite("Panel_Background");
         this.bg.width = 630;
         this.bg.height = 290;
         addChild(this.bg);
         var _loc2_:Sprite = UIManager.getSprite("Panel_Background_5");
         _loc2_.width = 580;
         _loc2_.height = 240;
         DisplayUtil.align(_loc2_,this.getRect(this),AlignType.MIDDLE_CENTER);
         addChild(_loc2_);
         this.picCon = new Sprite();
         this.picCon.x = 50;
         this.picCon.y = 30;
         addChild(this.picCon);
         this.mainBox = new VBox(0);
         this.mainBox.halign = FlowLayout.CENTER;
         this.mainBox.valign = FlowLayout.MIDLLE;
         this.mainBox.setSizeWH(500,200);
         DisplayUtil.align(this.mainBox,this.getRect(this),AlignType.MIDDLE_CENTER);
         addChild(this.mainBox);
         this.mainBox.append(this.petBox);
         var _loc3_:MText = new MText();
         _loc3_.align = TextFormatAlign.CENTER;
         _loc3_.setSizeWH(410,30);
         _loc3_.text = "请选择<b><font color=\'#ff0000\'>朝向</font><font color=\'#0000ff\'>" + this.STR_LIST[this._quetionId] + "</font></b>的精灵！";
         _loc3_.selectable = false;
         this.mainBox.append(_loc3_);
         this.getPetPic();
         this.getPetBtn();
      }
      
      private function getPetPic() : void
      {
         var complete:Function = null;
         complete = function(param1:Event):void
         {
            var _loc2_:Bitmap = param1.target.content as Bitmap;
            picCon.addChild(_loc2_);
         };
         var load:Loader = new Loader();
         load.loadBytes(this._bytes);
         load.contentLoaderInfo.addEventListener(Event.COMPLETE,complete);
      }
      
      private function getPetBtn() : void
      {
         var _loc2_:MLoadPane = null;
         var _loc1_:uint = 0;
         while(_loc1_ < 4)
         {
            _loc2_ = new MLoadPane();
            _loc2_.width = 125;
            _loc2_.height = 170;
            _loc2_.name = String(_loc1_ + 1);
            _loc2_.graphics.beginFill(16711680,0.01);
            _loc2_.graphics.drawRect(0,0,125,170);
            _loc2_.graphics.endFill();
            _loc2_.buttonMode = true;
            _loc2_.mouseChildren = true;
            _loc2_.addEventListener(MouseEvent.CLICK,this.clickSinglePet);
            this.petBox.append(_loc2_);
            _loc1_++;
         }
      }
      
      private function clickSinglePet(param1:MouseEvent) : void
      {
         var _loc2_:Sprite = param1.currentTarget as Sprite;
         var _loc3_:uint = uint(_loc2_.name);
         DebugTrace.show(_loc3_);
         var _loc4_:uint;
         var _loc5_:uint = uint((_loc4_ = uint(Math.random() * 4294967295)) & 4294967280 | _loc3_);
         SocketConnection.send(CommandID.FIGHT_READY_INFO,_loc5_);
         this.destroy();
      }
      
      public function destroy() : void
      {
         DisplayUtil.removeForParent(this);
         this.mainBox.destroy();
         this.mainBox = null;
         this.petBox = null;
         LevelManager.openMouseEvent();
      }
   }
}

package com.robot.app.picturebook.petBookUpdate
{
   import com.robot.app.picturebook.PictureBookController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.config.xml.SkillXMLInfo;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CommonUI;
   import flash.display.Bitmap;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class CatchPetPanel extends Sprite
   {
       
      
      private var _id:uint;
      
      private var mc:MovieClip;
      
      private var bookBtn:SimpleButton;
      
      private var closeBtn:SimpleButton;
      
      private var iconMC:SimpleButton;
      
      private var showMc:MovieClip;
      
      public function CatchPetPanel(param1:uint)
      {
         super();
         this._id = param1;
         this.mc = UIManager.getMovieClip("ui_pet_catch_panel");
         addChild(this.mc);
         this.mc["name_txt"].text = PetXMLInfo.getName(param1);
         this.mc["id_txt"].text = this._id.toString();
         this.bookBtn = this.mc["bookBtn"];
         this.bookBtn.addEventListener(MouseEvent.CLICK,this.showBook);
         this.closeBtn = this.mc["closeBtn"];
         this.closeBtn.addEventListener(MouseEvent.CLICK,this.closeHandler);
         var _loc2_:uint = uint(PetXMLInfo.getLastSkillID(this._id));
         this.mc["skillName_txt"].text = SkillXMLInfo.getName(_loc2_);
         this.mc["skillValue_txt"].text = SkillXMLInfo.getDamage(_loc2_);
         this.iconMC = UIManager.getButton("Icon_PetType_" + PetXMLInfo.getType(param1));
         if(SkillXMLInfo.getCategory(_loc2_) == 4)
         {
            this.iconMC = UIManager.getButton("Icon_PetType_prop");
         }
         if(this.iconMC)
         {
            this.iconMC.scaleX = this.iconMC.scaleY = 1.5;
            addChild(this.iconMC);
            CommonUI.centerAlign(this.iconMC,this,new Point(312,94));
         }
         ResourceManager.getResource(ClientConfig.getPetHeadPath(param1),this.onShowComplete,"item");
      }
      
      private function showBook(param1:MouseEvent) : void
      {
         this.closeHandler(null);
         PictureBookController.show([this._id]);
         SocketConnection.send(1022,86053204);
      }
      
      private function onShowComplete(param1:DisplayObject) : void
      {
         var _loc2_:MovieClip = param1 as MovieClip;
         DisplayUtil.removeAllChild(this.mc["petContainer"]["pet"]);
         var _loc3_:Bitmap = DisplayUtil.copyDisplayAsBmp(_loc2_);
         this.mc["petContainer"]["pet"].addChild(_loc3_);
      }
      
      private function closeHandler(param1:MouseEvent) : void
      {
         ResourceManager.cancel(ClientConfig.getPetSwfPath(this._id,0),this.onShowComplete);
         DisplayUtil.removeForParent(this);
         this.bookBtn.removeEventListener(MouseEvent.CLICK,this.showBook);
         this.closeBtn.removeEventListener(MouseEvent.CLICK,this.closeHandler);
         this.mc = null;
         this.bookBtn = null;
         this.closeBtn = null;
         this.iconMC = null;
         this.showMc = null;
      }
   }
}

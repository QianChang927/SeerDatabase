package com.robot.app.petbag.ui
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.controller.PetPropAddController;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.TasksManager;
   import flash.display.Bitmap;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.text.TextField;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class PetBagListItemNew extends Sprite
   {
       
      
      private var _bloodText:TextField;
      
      private var _showMc:MovieClip;
      
      public var _mainUI:MovieClip;
      
      private var _info:PetInfo;
      
      public function PetBagListItemNew()
      {
         super();
      }
      
      public function show() : void
      {
         if(this._mainUI)
         {
            addChild(this._mainUI);
         }
      }
      
      public function get info() : PetInfo
      {
         return this._info;
      }
      
      public function set info(param1:PetInfo) : void
      {
         var displayHp:uint;
         var displayMaxHp:uint;
         var value:PetInfo = param1;
         this._info = value;
         this._mainUI["nameText"].text = PetXMLInfo.getName(this._info.id);
         KTool.showScore(this._mainUI["level"],this._info.level);
         displayHp = this._info.hp > 0 ? uint(this._info.hp + PetPropAddController.getAllAddList(this._info)[5]) : uint(this._info.hp);
         displayMaxHp = this._info.maxHp + PetPropAddController.getAllAddList(this._info)[5];
         if(this._info.id == 70 && TasksManager.getTaskStatus(1241) == TasksManager.COMPLETE)
         {
            displayMaxHp += 20;
            if(displayHp > 0)
            {
               displayHp += 20;
            }
         }
         this._mainUI["bloodText"].text = displayHp + "/" + displayMaxHp;
         this._mainUI["maskMC"].width = displayHp / displayMaxHp * 95.7;
         ResourceManager.getResource(ClientConfig.getPetHeadPath(this._info.id,this._info.catchTime),function(param1:DisplayObject):void
         {
            _showMc = param1 as MovieClip;
            DisplayUtil.removeAllChild(_mainUI["con"]);
            _showMc.scaleX = _showMc.scaleY = 0.75;
            var _loc2_:Bitmap = DisplayUtil.copyDisplayAsBmp(_showMc);
            _mainUI["con"].addChild(_loc2_);
         },"item");
         ToolTipManager.remove(this);
      }
   }
}
